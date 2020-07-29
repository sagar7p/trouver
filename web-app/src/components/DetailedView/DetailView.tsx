import React from 'react';

import '../../styles/detail-view.css';
import { Place } from '../../models/Place';
import { enableDetailView } from '../../App';
import MapView from '../MapView/MapView';

export interface DetailViewProps {
    place: Place | undefined;
}

export class DetailView extends React.Component<DetailViewProps> {
    render() {
        const { place } = this.props;
        return place ? (
            <div className="bg-modal">
                <div className="modal-content">
                    <div className="close" onClick={() => this.onCloseButtonClick()}>+</div>
                    <h2>{place.name}</h2>
                    <img src={place.image.url} alt={place.id}></img>
                    <div className="map">
                        <MapView myPlaces={[place]}/>
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
            </div>
        ) : (
            <div>
                <div className="close" onClick={() => this.onCloseButtonClick()}>+</div>
            </div>
        );
    }

    private onCloseButtonClick() {
        enableDetailView.next({
            enableDetailView: false,
            detailViewPlace: undefined
        })
    }
}