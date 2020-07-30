import React from "react";
import { IoIosAddCircleOutline, IoIosGlobe, IoMdPerson } from "react-icons/io";
import { BsGrid } from "react-icons/bs";
import { BehaviorSubject } from "rxjs";
import { PageType } from "../../models/PageType";
import Logo from "../../assets/trouver-logo.png";

import "../../styles/header.css";
import GoogleBtn from "../GoogleButton";

export interface HeaderProps { }

const currentPage = new BehaviorSubject(PageType.LandingView);

class Header extends React.Component<HeaderProps> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return (
            <div className="header-box">
                <div className="header-title">
                    <div className="image-box">
                        <img className="logo" src={Logo} alt="trouver-logo"></img>
                    </div>
                    <div style={{ paddingTop: "3%" }}>
                        <button>
                            <IoMdPerson />
                        </button>
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
