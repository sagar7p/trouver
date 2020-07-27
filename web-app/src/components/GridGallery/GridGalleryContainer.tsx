import React from 'react';
import { photos } from '../../photos';
import { GridGallery } from './GridGallery';

export class GridGalleryContainer extends React.Component {
    render() {
        return (
            <GridGallery photos={photos} />
        );
    }
}