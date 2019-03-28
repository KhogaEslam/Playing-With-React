import React from 'react';
import {
  Table
} from 'antd';

import 'antd/dist/antd.css';

const columns = [];

for (let i = 1; i <= 5000; i++) {
  columns.push({
    title: `c ${i}`,
    dataIndex: `c${i}`,
    key: `c${i}`,
  });
}

const data = [];
for (let i = 1; i <= 1000; i++) {
  const res = {};

  for (let j = 1; j <= 5000; j++)
    res[`c${j}`] = `c-${i}-${j}`;

  data.push({
    key: i,
    ...res,
  });
}

const scroll = {
  x: 100,
  y: 500
};

const pagination = { position: 'bottom' };

class AntTableBigNumberOfColumns extends React.Component {
  state = {
    bordered: true,
    loading: false,
    pagination,
    size: 'default',
    scroll,
  }

  render() {
    const state = this.state;
    return (
      <div>
        <Table {...this.state} columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default AntTableBigNumberOfColumns;