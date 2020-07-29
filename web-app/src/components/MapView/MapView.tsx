import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { Place } from '../../models/Place';
import { enableDetailView } from '../../App';

export interface MapViewProps {
    myPlaces: Place[];
    googleMapURL: string;
    loadingElement: JSX.Element;
    containerElement: JSX.Element;
    mapElement: JSX.Element;
}

function Map(props: MapViewProps) {
    return (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: 45.4, lng: -75.7 }}
        >
            {
                props.myPlaces.map((p) => (
                    <Marker
                        key={p.id}
                        position={{
                            lat: p.location.coordinates[0],
                            lng: p.location.coordinates[1],
                        }}
                        onClick={() => {
                            onMarkerClick(p);
                        }}
                    />
                ))
            }
        </GoogleMap>
    );
}

function onMarkerClick(place: Place) {
    enableDetailView.next({
        enableDetailView: true,
        detailViewPlace: place
    })
}

const wrappedGoogleMap = withGoogleMap(Map);
const WrappedMap = withScriptjs<MapViewProps>(wrappedGoogleMap);

export default function MapView(props: Omit<MapViewProps,'googleMapURL' | 'loadingElement' | 'containerElement' | 'mapElement'>) {
    const {myPlaces} = props;
    return (
        <div>
            <WrappedMap 
                googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Hcfy8V9t8LBA8GnIwOu3nHS-54Eqjbc&v=3.exp&libraries=geometry,drawing,places"}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                myPlaces={myPlaces}
            />
        </div>
    );
}