//@flow

import React, { Component } from 'react'
import '@atlaskit/css-reset'
import styled from 'styled-components'
import Navigation, { AkNavigationItem } from '@atlaskit/navigation'
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down'
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right'
import Button from '@atlaskit/button'
import Tree, { mutateTree, moveItemOnTree } from '@atlaskit/tree'
import { complexTree } from './packages/core/tree/mockdata/complexTree'

const Container = styled.div`
  display: flex;
`

const Dot = styled.span`
  display: flex;
  width: 24px;
  height: 32px;
  justify-content: center;
  font-size: 12px;
  line-height: 32px;
`

export default class DragDropWithNestingTree extends Component {
  state = {
    tree: complexTree
  }

  static getIcon(item, onExpand, onCollapse) {
    if (item.children && item.children.length > 0) {
      return item.isExpanded ? (
        <Button
          spacing="none"
          appearance="subtle-link"
          onClick={() => onCollapse(item.id)}
        >
          <ChevronDownIcon
            label=""
            size="medium"
            onClick={() => onCollapse(item.id)}
          />
        </Button>
      ) : (
        <Button
          spacing="none"
          appearance="subtle-link"
          onClick={() => onExpand(item.id)}
        >
          <ChevronRightIcon
            label=""
            size="medium"
            onClick={() => onExpand(item.id)}
          />
        </Button>
      )
    }
    return <Dot>&bull;</Dot>
  }

  renderItem = ({ item, onExpand, onCollapse, provided, snapshot }) => {
    return (
      <div ref={provided.innerRef} {...provided.draggableProps}>
        <AkNavigationItem
          isDragging={snapshot.isDragging}
          text={item.data ? item.data.title : ''}
          icon={DragDropWithNestingTree.getIcon(item, onExpand, onCollapse)}
          dnd={{ dragHandleProps: provided.dragHandleProps }}
        />
      </div>
    )
  }

  onExpand = itemId => {
    const { tree } = this.state
    this.setState({
      tree: mutateTree(tree, itemId, { isExpanded: true })
    })
  }

  onCollapse = itemId => {
    const { tree } = this.state
    this.setState({
      tree: mutateTree(tree, itemId, { isExpanded: false })
    })
  }

  onDragEnd = (source, destination) => {
    const { tree } = this.state

    if (!destination) {
      return
    }

    const newTree = moveItemOnTree(tree, source, destination)
    this.setState({
      tree: newTree
    })
  }

  render() {
    const { tree } = this.state

    return (
      <Container>
        <Navigation>
          <Tree
            tree={tree}
            renderItem={this.renderItem}
            onExpand={this.onExpand}
            onCollapse={this.onCollapse}
            onDragEnd={this.onDragEnd}
            isDragEnabled
            isNestingEnabled
          />
        </Navigation>
      </Container>
    )
  }
}
