import React from 'react';
import { compose, withProps } from 'recompose';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Hcfy8V9t8LBA8GnIwOu3nHS-54Eqjbc&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
);

class MapView extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <MapComponent
            //   isMarkerShown={this.state.isMarkerShown}
            //   onMarkerClick={this.handleMarkerClick}
            />
        )
    }
}

export default MapView;