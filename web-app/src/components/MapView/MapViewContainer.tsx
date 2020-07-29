import React from 'react';
import MapView from './MapView';
import { places } from '../../MockData';

import '../../styles/map-view.css';
import '../../styles/grid-gallery.css';
import { Place } from '../../models/Place';

export interface MapViewContainerProps {
    places: Place[];
}

export class MapViewContainer extends React.Component<MapViewContainerProps> {
    render() {
        return (
            <div className="map-container">
                <MapView myPlaces={this.props.places} />
            </div>
        );
    }
}