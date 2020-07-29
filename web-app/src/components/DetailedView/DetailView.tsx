import React from 'react';

import '../../styles/detail-view.css';
import { Place } from '../../models/Place';

export interface DetailViewProps {
    place: Place | undefined;
}

export class DetailView extends React.Component<DetailViewProps> {
    render() {
        return (
            <div className="bg-modal">
                <div className="modal-content">
                    {this.props.place ? this.props.place.name : 'Hello!'}
                </div>
            </div>
        );
    }
}