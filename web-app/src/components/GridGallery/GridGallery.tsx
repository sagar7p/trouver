import React from 'react';
import { GridGalleryItem } from './GridGalleryItem';

import '../../styles/grid-gallery.css';
import { Place } from '../../models/Place';

export enum PhotoSize {
    Small,
    Medium,
    Large
}

export interface PhotoObject {
    width: PhotoSize;
    height: PhotoSize;
    url: string;
    name: string;
}

export interface GridGalleryProps {
    places: Place[];
}

export interface GridGalleryState {
    
}

export class GridGallery extends React.Component<GridGalleryProps, GridGalleryState> {
    constructor(props: GridGalleryProps) {
        super(props);
        this.state = {photoObjects: []};
    }

    render() {
        return (
            <div className="container">
                {
                    this.props.places ? this.props.places.map((p) => (
                        <GridGalleryItem place={p} />
                    )) : <div></div>
                }
            </div>
        );
    }
}