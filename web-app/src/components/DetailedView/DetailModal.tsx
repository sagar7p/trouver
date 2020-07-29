import React from 'react';
import { Modal } from 'react-bootstrap';
import { Place } from '../../models/Place';
import { enableDetailView } from '../../App';

export interface DetailModalProps {
    place: Place | undefined;
    showModal: boolean;
}

export class DetailModal extends React.Component<DetailModalProps> {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={()=> { this.onClose() }}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    Hello!
                </Modal.Body>
            </Modal>
        );
    }

    private onClose() {
        enableDetailView.next({
            detailViewPlace: undefined,
            enableDetailView: false
        });
    }
}