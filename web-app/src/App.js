import React from 'react';
import './App.css';
import { GridGalleryContainer } from './components/GridGallery/GridGalleryContainer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <GridGalleryContainer />
      </header>
    </div>
  );
}

export default App;
