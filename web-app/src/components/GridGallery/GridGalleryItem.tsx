import React from 'react';
import { PhotoObject, PhotoSize } from './GridGallery';
import '../../styles/grid-gallery.css';

export interface GridGalleryItemProps {
    photoObject: PhotoObject;
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
        this.setState({
            width: this.convertWidth(this.props.photoObject.width),
            height: this.convertHeight(this.props.photoObject.height),
        });
    }

    render() {
        if (this.state.width && this.state.height) {
            const galleryContainerClassName = 'gallery-container ' + this.state.width + ' ' + this.state.height; 
            return (
                <div className={galleryContainerClassName}>
                    <div className="gallery-item">
                        <div className="image">
                            <img src={this.props.photoObject.url} alt="nature" />
                        </div>
                        <div className="text">Nature</div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
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
}