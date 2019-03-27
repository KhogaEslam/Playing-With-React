
import React from 'react';
import 'antd/dist/antd.css';
import {
  Table,
  Divider,
  Tag,
  Menu,
  Dropdown,
  Icon
} from 'antd';

const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

const menu = (
  <Menu>
    <Menu.Item>
      Action 1
    </Menu.Item>
    <Menu.Item>
      Action 2
    </Menu.Item>
  </Menu>
);

const AntHeaderCustomOptionsMenu = (props) => (
  <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column
        title="First Name"
        dataIndex="firstName"
        key="firstName"
      />
      <Column
        title={
            <span className="table-operation">
              <a href="www.google.com">Pause</a>
              <Divider type="vertical" />
              <a href="www.google.com">Stop</a>
              <Divider type="vertical" />
              <Dropdown overlay={menu}>
                <a href="www.google.com">
                  More <Icon type="down" />
                </a>
              </Dropdown>
            </span>
        }
        dataIndex="lastName"
        key="lastName"
      />
    </ColumnGroup>
    <Column
      title="Age"
      dataIndex="age"
      key="age"
    />
    <Column
      title="Address"
      dataIndex="address"
      key="address"
    />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <span>
          <a href="www.google.com">Invite {record.lastName}</a>
          <Divider type="vertical" />
          <a href="www.google.com">Delete</a>
        </span>
      )}
    />
  </Table>
);

export default AntHeaderCustomOptionsMenu;