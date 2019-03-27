import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AntTable from './AntTable/AntTable';
import AntTableDragDropColumn from './AntTable/AntTableDragDropColumn';
import DragMergingColumn from './AntTable/DragMergingColumn';
import AntHeader from './AntTable/AntHeader'
import AntHeaderCustomIcon from './AntTable/AntHeaderCustomIcon'
import AntHeaderMultiLevels from './AntTable/AntHeaderMultiLevels'
import AntHeaderCustomOptionsMenu from './AntTable/AntHeaderCustomOptionsMenu'
import AntWithHighChart from './AntTable/AntWithHighChart'

import DNDScrollZone from './DND/DNDScrollZone'

const AntTableExamples = (props) => (
    <div>
      <AntTable />
      <hr></hr>
      <AntTableDragDropColumn / >
      <hr></hr>
      <DragMergingColumn />
      <hr></hr>
      <AntHeader />
      <hr></hr>
      <AntHeaderCustomIcon />
      <hr></hr>
      <AntHeaderMultiLevels />
      <hr></hr>
      <AntHeaderCustomOptionsMenu />
      <hr></hr>
      <AntWithHighChart />
      <hr></hr>
    </div>
  );

const SmoothDNDWithVirtualList = (props) => (
    <div>
      <hr></hr>
      <DNDScrollZone />
    </div>
  );

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmoothDNDWithVirtualList />
        <AntTableExamples />
      </div>
    );
  }
}

export default App;
