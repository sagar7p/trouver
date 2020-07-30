import React from "react";
import { IoIosAddCircleOutline, IoIosGlobe } from "react-icons/io";
import { BsGrid } from "react-icons/bs";
import { BehaviorSubject } from "rxjs";
import { PageType } from "../../models/PageType";
import Logo from "../../assets/trouver-logo.png";
import { GoogleLogout } from 'react-google-login';
import { currentId, CLIENT_ID } from '../LandingView/LandingView';

import "../../styles/header.css";

export interface HeaderProps { }

const currentPage = new BehaviorSubject(PageType.LandingView);

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <div className="header-box">
                <div className="header-title">
                    <div className="image-box">
                        <img className="logo" src={Logo} alt="trouver-logo"></img>
                    </div>
                    <div style={{ paddingTop: "3%" }}>
                        <GoogleLogout
                            clientId={CLIENT_ID}
                            buttonText="Logout"
                            onLogoutSuccess={this.logout}
                            onFailure={() => { console.log('Failed to log in') }}
                        ></GoogleLogout>
                    </div>
                </div>
                <div className="toolbar">
                    <button>
                        <IoIosAddCircleOutline />
                    </button>
                    <button onClick={() => this.changePage(PageType.GridView)}>
                        <BsGrid />
                    </button>
                    <button onClick={() => this.changePage(PageType.MapView)}>
                        <IoIosGlobe />
                    </button>
                </div>
            </div>
        );
    }

    private logout() {
        currentId.next(undefined);
    }

    private changePage(newPage: PageType) {
        switch (newPage) {
            case PageType.GridView:
                const gridBtn = document.getElementById('GridButton');
                if (gridBtn) {
                    gridBtn.style.opacity = '1';
                }
                break;
            case PageType.MapView:
                const mapBtn = document.getElementById('GridButton');
                if (mapBtn) {
                    mapBtn.style.opacity = '1';
                }
                break;
        }

        currentPage.next(newPage);
    }
}

export { Header, currentPage };
