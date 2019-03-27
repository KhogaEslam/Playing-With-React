import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { DragDropContext, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';

let draggingIndex = -1;

class BodyColumn extends React.Component {
  render() {
    const {
      isOver,
      connectDragSource,
      connectDropTarget,
      moveColumn,
      ...restProps
    } = this.props;
    const style = { ...restProps.style, cursor: 'move' };

    let className = restProps.className;
    if (isOver) {
      if (restProps.index > draggingIndex) {
        className += ' drop-over-downward';
      }
      if (restProps.index < draggingIndex) {
        className += ' drop-over-upward';
      }
    }

    return connectDragSource(
      connectDropTarget(
        <th
          {...restProps}
          className={className}
          style={style}
        />
      )
    );
  }
}
const columnSource = {
  beginDrag(props) {
    draggingIndex = props.index;
    return {
      index: props.index,
    };
  },
};
const columnTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    props.moveColumn(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};
const DraggableBodyColumn = DropTarget(
  'cell',
  columnTarget,
  (connect, monitor) => {
    return{
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  }},
)(
  DragSource(
    'cell',
    columnSource,
    (connect) => {
      return{
      connectDragSource: connect.dragSource(),
    }},
  )(BodyColumn),
);

class DragSortingTable extends React.Component {
  state = {
    data: [{
      key: '1',
      name: 'John Bcolumnn',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }],
    columns: [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }],
  }

  components = {
    header: {
      cell: DraggableBodyColumn,
    },
  }

  moveColumn = (dragIndex, hoverIndex) => {
    const { columns } = this.state;
    const dragColumn = columns[dragIndex];

    this.setState(
      update(this.state, {
        columns: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragColumn]],
        },
      }),
    );
  }

  handleHeaderCell = (record, index) => {
    return {
    index,
    moveColumn: this.moveColumn,
  }
}

  render() {
    return (
      <Table
        bordered
        columns={this.state.columns}
        dataSource={this.state.data}
        components={this.components}
        onHeaderCell={this.handleHeaderCell}
      />
    );
  }
}

const DragMergingColumn = DragDropContext(HTML5Backend)(DragSortingTable);

export default DragMergingColumn;
