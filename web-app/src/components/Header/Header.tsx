import React from 'react';
import {IoIosAddCircleOutline, IoIosGrid, IoIosGlobe, IoMdPerson} from 'react-icons/io';
import { selectPage } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../../styles/header.css';
import { Pages } from '../../reducers/page-reducer';

export interface HeaderProps {
    selectPage(page: Pages): void;
}

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <div className="header-conatiner">
                <div className="header-title">
                    <div>
                        <h1>Trouver</h1>
                    </div>
                    <div style={{paddingTop: "5%"}}>
                        <button><IoMdPerson /></button>
                    </div>
                </div>
                <div style={{textAlign:"left"}}>
                    <button><IoIosAddCircleOutline /></button>
                    <button onClick={() => this.props.selectPage(Pages.GridView)}><IoIosGrid /></button>
                    <button onClick={() => this.props.selectPage(Pages.MapView)}><IoIosGlobe /></button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(_state: any) {
    return {};
}

function matchDispatchToProps(dispatch: any) {
    return bindActionCreators({selectPage: selectPage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
