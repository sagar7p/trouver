import React, { Component, RefObject } from "react"; // let's also import Component
import "./Popup.scss";

interface Place {
  userId: string;
  name: string;
  lat: number;
  long: number;
  imageUrl: string;
  imageHeight: number;
  imageWidth: number;
}
interface FormProps {
  imageUrl: string;
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
        <h1 id="title">Save your location</h1>
        <p id="subtitle">Enter this location:</p>
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
    const payload: Place = {
      userId: "1",
      name: place.name,
      lat: place.geometry.location.lat(),
      long: place.geometry.location.lng(),
      imageUrl: this.props.imageUrl,
      imageHeight: imgHeight,
      imageWidth: imgWidth,
    };

    console.log("submitted " + JSON.stringify(payload));

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
  public autocompleteInput: RefObject<HTMLInputElement>;
  public autocomplete: google.maps.places.Autocomplete;

  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
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
        ref={this.autocompleteInput}
        id="autocomplete"
        placeholder="Enter your address"
        type="Enter a location"
      ></input>
    );
  }
}
