import React from 'react';
import {IoIosAddCircleOutline, IoIosGrid, IoIosGlobe, IoMdPerson} from 'react-icons/io';

import '../../styles/header.css';

export class Header extends React.Component {
    render() {
        return (
            <div className="header-conatiner">
                <div className="header-title">
                    <div className="left-block">
                        <h1>Trouver</h1>
                    </div>
                    <div className="right-block">
                        <button><IoMdPerson /></button>
                    </div>
                </div>
                <div style={{textAlign:"left"}}>
                    <button><IoIosAddCircleOutline /></button>
                    <button><IoIosGrid /></button>
                    <button><IoIosGlobe /></button>
                </div>
            </div>
        );
    }
}