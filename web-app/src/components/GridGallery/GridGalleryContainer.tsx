import React from 'react';
import { GridGallery } from './GridGallery';
import { Place } from '../../models/Place';

export interface GridGalleryContainerProps {
    places: Place[];
}

export class GridGalleryContainer extends React.Component<GridGalleryContainerProps> {
    render() {
        return (
            <GridGallery places={this.props.places} />
        );
    }


}