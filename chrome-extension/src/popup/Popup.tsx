import React, { Component, RefObject } from "react"; // let's also import Component
import "./Popup.scss";
type FormProps = {
  imageUrl: string;
};
export default class Popup extends Component<FormProps> {
  render() {
    return (
      <form>
        <h1 id="title">Save your location</h1>
        <p id="subtitle">Enter this location:</p>
        <SearchBar />
        <img src={this.props.imageUrl} alt="Logo" id="image" />
      </form>
    );
  }
}

type SearchBarProps = {
  onPlaceLoaded?: (place: google.maps.places.PlaceResult) => {};
};

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
