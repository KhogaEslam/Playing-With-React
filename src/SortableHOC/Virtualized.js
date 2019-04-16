import React, { Component } from 'react'
import { sortableContainer, sortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { List } from 'react-virtualized'

const SortableItem = sortableElement(({ value }) => {
  return <li>{value}</li>
})

class VirtualList extends Component {
  renderRow = ({ index }) => {
    const { items } = this.props
    const { value } = items[index]
    const { key } = items[index]

    return <SortableItem key={key} index={index} value={value} />
  }

  getRowHeight = ({ index }) => {
    const { items } = this.props
    return items[index].height
  }

  render() {
    const { items, getRef } = this.props

    return (
      <List
        ref={getRef}
        rowHeight={this.getRowHeight}
        rowRenderer={this.renderRow}
        rowCount={items.length}
        width={400}
        height={600}
      />
    )
  }
}

const SortableVirtualList = sortableContainer(VirtualList)

class Virtualized extends Component {
  constructor(props) {
    super(props)

    const items = []
    for (let i = 1; i <= 100; i++) {
      items.push({
        key: i,
        value: `Item ${i}`,
        height: this.getRandomInt(50, 200)
      })
    }
    this.state = {
      items
    }
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  registerListRef = listInstance => {
    this.List = listInstance
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex === newIndex) {
      return
    }

    const { items } = this.state

    this.setState({
      items: arrayMove(items, oldIndex, newIndex)
    })

    // We need to inform React Virtualized that the items have changed heights
    // This can either be done by imperatively calling the recomputeRowHeights and
    // forceUpdate instance methods on the `List` ref, or by passing an additional prop
    // to List that changes whenever the order changes to force it to re-render
    this.List.recomputeRowHeights()
    this.List.forceUpdate()
  }

  render() {
    const { items } = this.state

    return (
      <SortableVirtualList
        getRef={this.registerListRef}
        items={items}
        onSortEnd={this.onSortEnd}
      />
    )
  }
}

export default Virtualized
