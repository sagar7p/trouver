import React from 'react';

import '../../styles/detail-view.css';
import { Place } from '../../models/Place';
import { enableDetailView } from '../../App';

export interface DetailViewProps {
    place: Place | undefined;
}

export class DetailView extends React.Component<DetailViewProps> {
    render() {
        return (
            <div className="bg-modal">
                <div className="modal-content">
                    <div className="close" onClick={() => this.onCloseButtonClick()}>+</div>
                    {this.props.place ? this.props.place.name : 'Hello!'}
                </div>
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