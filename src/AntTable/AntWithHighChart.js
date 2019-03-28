import React from 'react';
import 'antd/dist/antd.css';
import { Table, Divider, Tag } from 'antd';
import Highcharts from "highcharts/highstock";

import Container from './HighCharts/Container';

require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

const columns = [{
  title: 'histo',
  dataIndex: 'histo',
  key: 'histo',
  width: '20%',
  hight: '10%',
  render: data => <Container data={data} />,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
      })}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="www.google.com">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="www.google.com">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  histo: [...Array(3)].map(Math.random),
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  histo: [...Array(3)].map(Math.random),
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  histo: [...Array(3)].map(Math.random),
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

const AntWithHighChart = (props) => (<Table bordered columns={columns} dataSource={data} />);

export default AntWithHighChart;