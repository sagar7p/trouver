import React from 'react';
import { IoIosAddCircleOutline, IoIosGlobe, IoMdPerson } from 'react-icons/io';
import { BsGrid } from 'react-icons/bs';
import { BehaviorSubject } from 'rxjs';
import { PageType } from '../../models/PageType';
import Logo from '../../assets/trouver-logo.png';

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
                    <div className="image-box">
                        <img className="logo" src={Logo} alt="trouver-logo"></img>
                    </div>
                    <div style={{paddingTop: "3%"}}>
                        <button><IoMdPerson /></button>
                        <GoogleButton></GoogleButton>
                    </div>
                </div>
                <div className="toolbar">
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
