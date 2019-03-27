import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

// https://github.com/raisezhang/react-drag-listview
import ReactDragListView from 'react-drag-listview';

const audio = new Audio('tarzan.wav');

class AntTableDragDropColumn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    key: "1",
                    name: "Boran",
                    gender: "male",
                    age: "12",
                    address: "New York"
                },
                {
                    key: "2",
                    name: "JayChou",
                    gender: "male",
                    age: "38",
                    address: "TaiWan"
                },
                {
                    key: "3",
                    name: "Lee",
                    gender: "female",
                    age: "22",
                    address: "BeiJing"
                },
                {
                    key: "4",
                    name: "ChouTan",
                    gender: "male",
                    age: "31",
                    address: "HangZhou"
                },
                {
                    key: "5",
                    name: "AiTing",
                    gender: "female",
                    age: "22",
                    address: "Xi’An"
                }
            ],
            columns: [
                {
                    title: "Key",
                    dataIndex: "key"
                },
                {
                    title: "Name",
                    dataIndex: "name"
                },
                {
                    title: "Gender",
                    dataIndex: "gender"
                },
                {
                    title: "Age",
                    dataIndex: "age"
                },
                {
                    title: "Address",
                    dataIndex: "address"
                }
            ]
        };

        const that = this;
        this.dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const columns = that.state.columns;
                const data = that.state.data;
                const removedItem = columns.splice(fromIndex, 1)[0];
                const removedDataKey = removedItem.dataIndex;
                const mergeDataKey = columns[toIndex].dataIndex;
                // columns.splice(toIndex, 0, removedItem);
                data.forEach((value, key) => {
                    data[key][mergeDataKey] = data[key][mergeDataKey] + ' ' + data[key][removedDataKey]
                    delete data[key][removedItem]
                })

                that.setState({
                    columns,
                    data
                });

                audio.play();
            },
            nodeSelector: "th"
        };
    }

    render() {
        return (
            <div style={{ margin: 20 }}>
                <h2>Table column with dragging with <span>Tarazan</span> Sound</h2>
                <ReactDragListView.DragColumn {...this.dragProps}>
                    <Table
                        columns={this.state.columns}
                        pagination={false}
                        dataSource={this.state.data}
                        bordered
                    />
                </ReactDragListView.DragColumn>
            </div>
        );
    }
}

export default AntTableDragDropColumn;