import React from 'react';
import { enableDetailView } from '../../App';
import { PhotoObject, PhotoSize } from './GridGallery';
import '../../styles/grid-gallery.css';
import { Place } from '../../models/Place';

export interface GridGalleryItemProps {
    place: Place;
}

export interface GridGalleryItemState {
    width: string | undefined;
    height: string | undefined;
}

export class GridGalleryItem extends React.Component<GridGalleryItemProps, GridGalleryItemState> {
    constructor(props: GridGalleryItemProps) {
        super(props);
        this.state = {
            width: undefined,
            height: undefined
        }
    }

    componentDidMount() {
        const photoObject = this.placeToPhotoObject(this.props.place);

        this.setState({
            width: this.convertWidth(photoObject.width),
            height: this.convertHeight(photoObject.height),
        });
    }

    render() {
        if (this.state.width && this.state.height) {
            const galleryContainerClassName = 'gallery-container ' + this.state.width + ' ' + this.state.height; 
            return (
                <div className={galleryContainerClassName}>
                    <div className="gallery-item" onClick={() => this.onGalleryItemClick()}>
                        <div className="image">
                            <img src={this.props.place.image.url} alt={this.props.place.id} />
                        </div>
                        <div className="text">{this.props.place.name}</div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    private onGalleryItemClick() {
        enableDetailView.next({
            enableDetailView: true,
            detailViewPlace: this.props.place
        })
    }

    private convertWidth(width: PhotoSize): string {
        switch(width) {
            case PhotoSize.Small: {
                return 'w-1';
            }
            case PhotoSize.Medium: {
                return 'w-2';
            }
            case PhotoSize.Large: {
                return 'w-3';
            }
        }
    }

    private convertHeight(height: PhotoSize): string {
        switch(height) {
            case PhotoSize.Small: {
                return 'h-1';
            }
            case PhotoSize.Medium: {
                return 'h-2';
            }
            case PhotoSize.Large: {
                return 'h-3';
            }
        }
    }

    private placeToPhotoObject(place: Place): PhotoObject {
        const img = new Image();
        img.src = place.image.url;
        
        const width = this.dimensionToPhotoSize(place.image.width);
        const height = this.dimensionToPhotoSize(place.image.height);

        return {
            width,
            height,
            url: place.image.url,
            name: place.name
        };
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