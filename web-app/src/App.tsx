import React from "react";
import "./App.css";
import { GridGalleryContainer } from "./components/GridGallery/GridGalleryContainer";
import { Header, currentPage } from "./components/Header/Header";
import { MapViewContainer } from "./components/MapView/MapViewContainer";
import { PageType } from "./models/PageType";
import { Place } from "./models/Place";
import { BehaviorSubject } from "rxjs";
import { DetailModal } from "./components/DetailedView/DetailModal";
import { PlacesService } from "./services/places.service";

import "bootstrap/dist/css/bootstrap.min.css";
import LandingView, { currentId } from "./components/LandingView/LandingView";

export interface AppProps { }

export interface AppState {
  currentPage: PageType;
  placeObjects: Place[];
  showDetailView: boolean;
  detailViewPlace: Place | undefined;
  isLoading: boolean;
  userId: string | undefined;
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
  detailViewPlace: undefined,
});

export const loadedPlaces = new BehaviorSubject<LoadPlacesData>({
  completed: true,
  placesArray: [],
});

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      currentPage: PageType.LandingView,
      placeObjects: [],
      showDetailView: false,
      detailViewPlace: undefined,
      isLoading: false,
      userId: undefined,
    };
  }

  componentDidMount() {
    currentPage.subscribe((page: PageType) => {
      this.setState({
        ...this.state,
        currentPage: page,
      });
    });

    enableDetailView.subscribe((data: DetailViewData) => {
      this.setState({
        ...this.state,
        showDetailView: data.enableDetailView,
        detailViewPlace: data.detailViewPlace,
      });
    });

    loadedPlaces.subscribe((loadState: LoadPlacesData) => {
      this.setState({
        ...this.state,
        isLoading: !loadState.completed,
        placeObjects: loadState.placesArray,
      });
    });

    currentId.subscribe((userId: string | undefined) => {
      this.setState(
        {
          ...this.state,
          userId: userId,
        },
        async () => {
          if (userId) {
            loadedPlaces.next({
              completed: false,
              placesArray: [],
            });
            await PlacesService.getPlaces(userId);
            currentPage.next(PageType.GridView);
          } else {
            currentPage.next(PageType.LandingView);
          }
        }
      );
    });
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
        case PageType.LandingView:
          return <LandingView />;
        default:
          return <GridGalleryContainer places={this.state.placeObjects} />;
      }
    };

    return (
      <div className="App">
        <header className="App-header">
          <div>
            {this.state.isLoading ? (
              <div>Loading...</div>
            ) : (
                <div>
                  {this.state.userId ? <Header /> : null}
                  {page(this.state.currentPage)}
                  <DetailModal
                    place={this.state.detailViewPlace}
                    showModal={this.state.showDetailView}
                  />
                </div>
              )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
