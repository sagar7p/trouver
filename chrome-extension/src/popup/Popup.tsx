import React, { Component, RefObject } from "react"; // let's also import Component
import "./Popup.scss";

interface Place {
  name: string;
  userId: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface FormProps {
  imageUrl: string;
  userId: string;
}

interface FormState {
  place?: google.maps.places.PlaceResult;
  imgHeight: number;
  imgWidth: number;
}

export default class Popup extends Component<FormProps, FormState> {
  constructor(props) {
    super(props);
    this.state = { place: null, imgHeight: 0, imgWidth: 0 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImgLoad = this.onImgLoad.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 id="title">Welcome to Trouver</h1>
        <p id="subtitle">Save this location:</p>
        <SearchBar onPlaceLoaded={this.onPlaceLoaded.bind(this)} />
        <img
          src={this.props.imageUrl}
          alt="Logo"
          id="image"
          onLoad={this.onImgLoad}
        />
        <input id="submit" type="submit" value="Submit" />
      </form>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const { place, imgHeight, imgWidth } = this.state;
    const { imageUrl, userId } = this.props;

    const payload: Place = {
      name: place.name,
      userId: userId,
      image: {
        url: imageUrl,
        height: imgHeight,
        width: imgWidth,
      },
      coordinates: {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      },
    };

    console.log("submitted " + JSON.stringify(payload));

    fetch("http://localhost:5001/api/places/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          alert(error);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.log("error on post call");
        alert(error);
      });

    return false;
  }

  onPlaceLoaded(place) {
    this.setState({ place: place }, () => {
      console.log("place picked " + this.state.place.name);
    });
  }

  onImgLoad({ target: img }) {
    console.log(img.offsetHeight);
    console.log(img.offsetWidth);
    this.setState({
      imgHeight: img.offsetHeight,
      imgWidth: img.offsetWidth,
    });
  }
}

interface SearchBarProps {
  onPlaceLoaded?: (place: google.maps.places.PlaceResult) => {};
}

class SearchBar extends React.Component<SearchBarProps> {
  public autoCompleteInput: RefObject<HTMLInputElement>;
  public autocomplete: google.maps.places.Autocomplete;

  constructor(props) {
    super(props);
    this.autoCompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autoCompleteInput.current,
      {}
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceLoaded(place);
  }

  render() {
    return (
      <input
        ref={this.autoCompleteInput}
        id="autocomplete"
        placeholder="Enter your address"
        type="Enter a location"
      ></input>
    );
  }
}
