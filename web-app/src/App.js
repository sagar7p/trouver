import React from 'react';
import './App.css';
import { GridGalleryContainer } from './components/GridGallery/GridGalleryContainer';
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import { MapViewContainer } from './components/MapView/MapViewContainer';
import { Pages } from './reducers/page-reducer';

class App extends React.Component {
  render() {
    let view;
    switch(this.props.currentPage) {
      case Pages.GridView:
        view = <GridGalleryContainer />;
        break;
      case Pages.MapView:
        view = <MapViewContainer />;
        break;
      default:
        view = <GridGalleryContainer />;
    }

    return (
      <div className="App">
        <header className="App-header">
          <div style={{width: "auto"}}>
            <Header />
            {view}
          </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App);
