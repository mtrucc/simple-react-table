import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactTable } from './ReactTable';

const testColumns = [
  {
    title: 'Full Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'test',
    key: '1',
  },
  {
    title: 'Column 2',
    dataIndex: 'test',
    key: '2',
  },
  {
    title: 'Column 3',
    dataIndex: 'test',
    key: '3',
  },
  {
    title: 'Column 4',
    dataIndex: 'test',
    key: '4',
  },
  {
    title: 'Column 5',
    dataIndex: 'test',
    key: '5',
  },
  {
    title: 'Column 6',
    dataIndex: 'test',
    key: '6',
  },
  {
    title: 'Column 7',
    dataIndex: 'test',
    key: '7',
  },
  {
    title: 'Column 8',
    dataIndex: 'test',
    key: '8',
  },
  {
    title: 'Action',
    dataIndex: 'test',
    key: '9',
    fixed: 'right',
  },
];

let testData = [];

for (let i = 0; i < 1000; i++) {
  testData.push({
    key: i,
    name: `Name ${i}`,
    age: 32,
    test: `Test ${i}`,
  });
}

export class App {
  constructor() {
    this.render();
  }

  private render(): void {
    ReactDOM.render(
      React.createElement(ReactTable, { columns: testColumns, data: testData, customHeight: 300 }),
      document.getElementById('app')
    );
  }
}

new App();