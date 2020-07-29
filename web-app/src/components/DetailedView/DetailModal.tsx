import React from 'react';
import { Modal } from 'react-bootstrap';
import { Place } from '../../models/Place';
import { enableDetailView } from '../../App';
import MapView from '../MapView/MapView';

import '../../styles/detail-view.css';

export interface DetailModalProps {
    place: Place | undefined;
    showModal: boolean;
}

export class DetailModal extends React.Component<DetailModalProps> {
    render() {
        const { place } = this.props;
        return place ? (
            <Modal show={this.props.showModal} onHide={()=> { this.onClose() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{place.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="image-block">
                            <img src={place.image.url} alt={place.id}></img>
                        </div>
                        <div className="map-block">
                            <MapView
                                myPlaces={[place]}
                                defaultCenter={{lat: place.location.coordinates[0], lng: place.location.coordinates[1]}}
                                defaultZoom={5}
                            />
                        </div>
                        <div className="details">
                            {
                                place.elevation ? 
                                    <div>
                                        {place.elevation}
                                    </div>
                                : <div></div>
                            }
                            {
                                place.trailLength ? 
                                    <div>
                                        {place.trailLength}
                                    </div>
                                : <div></div>
                            }
                            {
                                place.weather ? 
                                    <div>
                                        {place.weather}
                                    </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        ) : (
            <div></div>
        );
    }

    private onClose() {
        enableDetailView.next({
            detailViewPlace: undefined,
            enableDetailView: false
        });
    }
}