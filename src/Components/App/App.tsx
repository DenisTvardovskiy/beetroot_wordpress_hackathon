import React from 'react';
import Map from "../Map/Map";

import './App.scss';
import './Grid.min.css';
import Header from "../Header/Header";
import Github from "../Github/Github";
import MapLegend from "../MapLegend/MapLegend";
import Test from "../Test/Test";


function App() {
  return (
    <div className="App">
        <Map/>
        <Header/>
        <Test/>
        <MapLegend/>
        <Github/>
    </div>
  );
}

export default App;
