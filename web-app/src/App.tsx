import React from 'react';
import './App.css';
import { GridGalleryContainer } from './components/GridGallery/GridGalleryContainer';
import { Header, currentPage } from './components/Header/Header';
import { MapViewContainer } from './components/MapView/MapViewContainer';
import { PageType } from './models/PageType';
import { Place } from './models/Place';
import { places } from './MockData';
import { BehaviorSubject } from 'rxjs';
import { DetailModal } from './components/DetailedView/DetailModal';
import { PlacesService } from './services/places.service';

import 'bootstrap/dist/css/bootstrap.min.css';

export interface AppProps {
}

export interface AppState {
  currentPage: PageType;
  placeObjects: Place[];
  showDetailView: boolean;
  detailViewPlace: Place | undefined;
  isLoading: boolean;
}

export interface LoadPlacesData {
  completed: boolean;
  placesArray: Place[];
}

export interface DetailViewData {
  enableDetailView: boolean;
  detailViewPlace: Place | undefined;
}

export const enableDetailView = new BehaviorSubject<DetailViewData>({
  enableDetailView: false,
  detailViewPlace: undefined
});

export const loadedPlaces = new BehaviorSubject<LoadPlacesData>({
  completed: false,
  placesArray: []
});

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      currentPage: PageType.GridView,
      placeObjects: [],
      showDetailView: false,
      detailViewPlace: undefined,
      isLoading: true
    };
  }

  async componentDidMount(): Promise<void> {
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

    loadedPlaces.subscribe((loadState: LoadPlacesData) => {
      this.setState({
        ...this.state,
        isLoading: !loadState.completed,
        placeObjects: loadState.placesArray
      })
    })

    await PlacesService.getPlaces();
  }

  render() {
    const page = (currentPage: PageType) => {
      switch (currentPage) {
        case PageType.GridView:
          return <GridGalleryContainer places={this.state.placeObjects} />;
        case PageType.MapView:
          return (
            <div>
              <MapViewContainer places={this.state.placeObjects} />;
            </div>
          );
        default:
          return <GridGalleryContainer places={this.state.placeObjects} />;
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.isLoading ? <div>Loading...</div>
              : <div>
                <Header />
                {page(this.state.currentPage)}
                <DetailModal place={this.state.detailViewPlace} showModal={this.state.showDetailView} />
              </div>
          }
        </header>
      </div>
    );
  }

  private getPlaces() {
    return places;
  }
}

export default App;
