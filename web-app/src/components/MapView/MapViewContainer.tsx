import React from 'react';
import MapView from './MapView';
import { places } from '../../MockData';

import '../../styles/map-view.css';
import '../../styles/grid-gallery.css';

export class MapViewContainer extends React.Component {
    render() {
        return (
            <div className="map-container">
                <MapView myPlaces={places}/>
            </div>
        );
    }
}