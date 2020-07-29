import React from 'react';
import { IoIosAddCircleOutline, IoIosGlobe, IoMdPerson } from 'react-icons/io';
import { BsGrid } from 'react-icons/bs';
import { BehaviorSubject } from 'rxjs';
import { PageType } from '../../models/PageType';

import '../../styles/header.css';
import { GoogleButton } from '../GoogleButton';

export interface HeaderProps {
    
}

const currentPage = new BehaviorSubject(PageType.GridView);

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <div className="header-conatiner">
                <div className="header-title">
                    <div>
                        <h1>Trouver</h1>
                    </div>
                    <div style={{paddingTop: "5%"}}>
                        {/* <button><IoMdPerson /></button> */}
                        <GoogleButton/>
                    </div>
                </div>
                <div style={{textAlign:"left", paddingLeft:"10%"}}>
                    <button><IoIosAddCircleOutline /></button>
                    <button onClick={() => this.changePage(PageType.GridView)}><BsGrid /></button>
                    <button onClick={() => this.changePage(PageType.MapView)}><IoIosGlobe /></button>
                </div>
            </div>
        );
    }

    private changePage(newPage: PageType) {
        currentPage.next(newPage);
    }
}

export {
    Header,
    currentPage
};
