import React from 'react';
import { GridGalleryItem } from './GridGalleryItem';

import '../styles/grid-gallery.css';

export enum PhotoSize {
    Small,
    Medium,
    Large
}

export interface PhotoObject {
    width: PhotoSize;
    height: PhotoSize;
    url: string;
}

export interface GridGalleryProps {
    photos: string[];
}

export interface GridGalleryState {
    photoObjects: PhotoObject[];
}

export class GridGallery extends React.Component<GridGalleryProps, GridGalleryState> {
    constructor(props: GridGalleryProps) {
        super(props);
        this.state = {photoObjects: []};
    }

    componentDidMount() {
        const photoObjects = this.photoStringToPhotoObject(this.props.photos);
        this.setState({
            ...this.state,
            photoObjects
        });
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.photoObjects ? this.state.photoObjects.map((photoObject) => (
                        <GridGalleryItem photoObject={photoObject} />
                    )) : <div></div>
                }
            </div>
        );
    }

    private photoStringToPhotoObject(photos: string[]): PhotoObject[] {
        return photos.map(photo => {
            const img = new Image();
            img.src = photo;
            const imgWidth = Math.random() * (2000 - 400) + 400;
            const imgHeight = Math.random() * (2000 - 400) + 400;
            const width = this.dimensionToPhotoSize(imgWidth);
            const height = this.dimensionToPhotoSize(imgHeight);

            return {
                width,
                height,
                url: photo
            };
        });
    }

    private dimensionToPhotoSize(dimension: number): PhotoSize {
        if (dimension > 0 && dimension < 500) {
            return PhotoSize.Small
        } else if (dimension > 501 && dimension < 1000) {
            return PhotoSize.Medium
        } else if (dimension > 1001) {
            return PhotoSize.Large
        } else {
            // TODO: This is an error scenario. We need to return undefined here and handle accordingly
            return PhotoSize.Small
        }
    }
}