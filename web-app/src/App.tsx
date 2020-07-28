import React from 'react';
import './App.css';
import { GridGalleryContainer } from './components/GridGallery/GridGalleryContainer';
import { Header, currentPage } from './components/Header/Header';
import { MapViewContainer } from './components/MapView/MapViewContainer';
import { PageType } from './models/PageType';

export interface AppProps {
}

export interface AppState {
  currentPage: PageType;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      currentPage: PageType.GridView
    };
  }

  componentDidMount() {
    currentPage.subscribe((page: PageType) => {
      this.setState({
        ...this.state,
        currentPage: page
      })
    });
  }

  render() {
    const page = (currentPage: PageType) => {
      switch(currentPage) {
        case PageType.GridView:
          return <GridGalleryContainer />;
        case PageType.MapView:
          return <MapViewContainer />;
        default:
          return <GridGalleryContainer />
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <div style={{width: "auto"}}>
            <Header />
            { page(this.state.currentPage) }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
