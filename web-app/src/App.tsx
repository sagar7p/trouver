import React from 'react';
import './App.css';
import { GridGalleryContainer } from './components/GridGallery/GridGalleryContainer';
import { Header, currentPage } from './components/Header/Header';
import { MapViewContainer } from './components/MapView/MapViewContainer';
import { PageType } from './models/PageType';
import { Place } from './models/Place';
import { places } from './MockData';
import { BehaviorSubject } from 'rxjs';
import { DetailView } from './components/DetailedView/DetailView';

export interface AppProps {
}

export interface AppState {
  currentPage: PageType;
  placeObjects: Place[];
  showDetailView: boolean;
  detailViewPlace: Place | undefined;
}

export interface DetailViewData {
  enableDetailView: boolean;
  detailViewPlace: Place | undefined;
}

export const enableDetailView = new BehaviorSubject<DetailViewData>({
  enableDetailView: false,
  detailViewPlace: undefined
});

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      currentPage: PageType.GridView,
      placeObjects: this.getPlaces(),
      showDetailView: false,
      detailViewPlace: undefined
    };
  }

  componentDidMount() {
    currentPage.subscribe((page: PageType) => {
      this.setState({
        ...this.state,
        currentPage: page
      })
    });

    enableDetailView.subscribe((data: DetailViewData) => {
      this.setState({
        ...this.state,
        showDetailView: data.enableDetailView,
        detailViewPlace: data.detailViewPlace
      })
    });
  }

  render() {
    const page = (currentPage: PageType) => {
      switch(currentPage) {
        case PageType.GridView:
          return <GridGalleryContainer places={this.state.placeObjects}/>;
        case PageType.MapView:
          return <MapViewContainer />;
        default:
          return <GridGalleryContainer places={this.state.placeObjects}/>;
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <div style={{width: "auto"}}>
            <Header />
            { page(this.state.currentPage) }
            { this.state.showDetailView ? <DetailView place={this.state.detailViewPlace}/> : <div></div>}
          </div>
        </header>
      </div>
    );
  }

  private getPlaces() {
    return places;
  }


}

export default App;
