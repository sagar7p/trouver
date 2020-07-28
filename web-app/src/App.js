import React from 'react';
import './App.css';
import { GridGalleryContainer } from './components/GridGallery/GridGalleryContainer';
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import { MapView } from './components/MapView/MapView';
import { Pages } from './reducers/page-reducer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Header />
            {
              this.props.currentPage === Pages.GridView ? (
                <GridGalleryContainer />
              ) : (
                <MapView />
              )
            }
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
