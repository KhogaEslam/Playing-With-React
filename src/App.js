import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import AntTable from './AntTable/AntTable'
import AntTableBigNumberOfColumns from './AntTable/AntTableBigNumberOfColumns'
import AntTableDragDropColumn from './AntTable/AntTableDragDropColumn'
import DragMergingColumn from './AntTable/DragMergingColumn'
import AntHeader from './AntTable/AntHeader'
import AntHeaderCustomIcon from './AntTable/AntHeaderCustomIcon'
import AntHeaderMultiLevels from './AntTable/AntHeaderMultiLevels'
import AntHeaderCustomOptionsMenu from './AntTable/AntHeaderCustomOptionsMenu'
import AntWithHighChart from './AntTable/AntWithHighChart'

import DNDScrollZone from './DND/DNDScrollZone'

import BeautifulDNDWithTree from './DND/BeautifulDND/BeautifulDNDWithTree/BeautifulDNDWithTree'

import VerticalList from './DND/BeautifulDND/Basic/VerticalList'
import HorizontalList from './DND/BeautifulDND/Basic/HorizontalList'
import WithFunctionComponents from './DND/BeautifulDND/Basic/WithFunctionComponents'
import BetweenTwoLists from './DND/BeautifulDND/Basic/BetweenTwoLists'

import Virtualized from './SortableHOC/Virtualized'
import TableWithSortableColumns from './SortableHOC/TableWithSortableColumns'

import VirtualizedSelect from './VirtualizedSelect/VirtualizedSelect'
// import ConfigurableExample from './VirtualizedSelect/MyConfigurableExample'

const AntTableExamples = props => (
  <div>
    {
      /*
    <hr />
    <AntTableBigNumberOfColumns />
    <hr />
    <AntTable />
    <hr />
    <AntTableDragDropColumn />
    <hr />
    <DragMergingColumn />
    <hr />
    <AntHeader />
    <hr />
    <AntHeaderCustomIcon />
    <hr />
    <AntHeaderMultiLevels />
    <hr />
    <AntHeaderCustomOptionsMenu />
    <hr />
    <AntWithHighChart />
    <hr />
    */
    }
  </div>
)

const DND = props => (
  <div>
    {
      /*
      <hr />
      <BeautifulDNDWithTree />
      <hr />
      <VerticalList />
      <hr />
      <HorizontalList />
      <hr />
      <WithFunctionComponents />
      <hr />
      <BetweenTwoLists />
      <hr />
      <DNDScrollZone />
      <hr />
    */
    }
  </div>
)

const VirtualizedSortableHOCTrial = props => (
  <div>
    {
    /*
    <hr />
    <Virtualized />
    <hr />
    <TableWithSortableColumns />
    <hr />
    */
  }
  </div>
)

const VirtualizedSelectTrial = props => (
  <div>
    {
      /*
    <hr />
    <VirtualizedSelect />
    <hr />
    <ConfigurableExample />
    <hr />
    */
    }
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Testing Area</h1>
        <hr />
        <DND />
        {
          /*
          <AntTableExamples />
          < VirtualizedSelectTrial / >
          <VirtualizedSortableHOCTrial />
        */
        }
      </div>
    )
  }
}

export default App
