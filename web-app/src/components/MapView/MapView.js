import React, { useState } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { places } from '../../MockData';

function Map() {
    return (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: 45.4, lng: -75.7 }}
        >
            {
                places.map((p) => (
                    <Marker
                        key={p.id}
                        position={{
                            lat: p.location.coordinates[0],
                            lng: p.location.coordinates[1],
                        }}
                        onClick={() => {
                            console.log(p);
                        }}
                    />
                ))
            }
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapView() {
    return (
        <div>
            <WrappedMap 
                googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Hcfy8V9t8LBA8GnIwOu3nHS-54Eqjbc&v=3.exp&libraries=geometry,drawing,places"}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
    );
}