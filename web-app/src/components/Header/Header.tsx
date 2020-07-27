import React from 'react';

import { ReactComponent as GridView } from '../../assets/grid-outline.svg';
import { ReactComponent as GlobeView } from '../../assets/globe-outline.svg';
import { ReactComponent as AddView } from '../../assets/add-circle-outline.svg';
import { ReactComponent as ProfileView } from '../../assets/person-circle-outline.svg';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <p>Trouver</p>
                <button><ProfileView /></button>
                <div>
                    <button><AddView /></button>
                    <button><GridView /></button>
                    <button><GlobeView /></button>
                </div>
            </div>
        );
    }
}