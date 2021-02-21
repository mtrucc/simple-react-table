import * as React from 'react';
import ReactList from 'react-list';
import './index.css';

type FixedType = string | undefined;

export interface ReactTablePropsColumns {
  title: string;
  dataIndex: string;
  key: string;
  fixed?: FixedType;
}

export interface ReactTableProps {
  columns: ReactTablePropsColumns[];
  data: any[];
  customHeight: number;
}

export class ReactTable extends React.Component<ReactTableProps, {}> {
  renderTbodyTree(index, key, props) {
    const { columns, data } = props;
    let rowData = data[index];
    return (
      <tr key={'Tbody_' + key}>
        {columns.map((e, index) => {
          let { fixed } = e;
          let style: any = {};
          if (fixed) {
            style.position = 'sticky';
            style.zIndex = '2';
            style.background = 'black';
            if (fixed === 'left') {
              style.left = index * 100 + 'px';
            } else {
              style.right = (columns.length - 1 - index) * 100 + 'px';
            }
          }
          return (
            <td key={'Tbody' + index} style={style}>
              {rowData[e.dataIndex]}
            </td>
          );
        })}
      </tr>
    );
  }
  renderTheadTree() {
    const { columns, data } = this.props;
    return (
      <tr>
        {columns.map((e, index) => {
          let { fixed } = e;
          let style: any = {};
          if (fixed) {
            style.position = 'sticky';
            style.zIndex = '3';
            style.background = 'black';
            if (fixed === 'left') {
              style.left = index * 100 + 'px';
            } else {
              style.right = (columns.length - 1 - index) * 100 + 'px';
            }
          }
          return (
            <th key={'Thead' + index} style={style}>
              {e.title}
            </th>
          );
        })}
      </tr>
    );
  }

  renderTable(items, ref) {
    return (
      <table>
        <thead>{this.renderTheadTree()}</thead>
        <tbody ref={ref}>{items}</tbody>
      </table>
    );
  }

  renderRow(index, key) {
    return (
      <tr key={key}>
        <td className='name'>{index}</td>
        <td className='score'>{key}</td>
      </tr>
    );
  }
  public render(): JSX.Element {
    return (
      <>
        <div
          style={{ overflow: 'auto', maxHeight: this.props.customHeight }}
        >
          <ReactList
            itemsRenderer={(items, ref) => this.renderTable(items, ref)}
            itemRenderer={(index, key) =>
              this.renderTbodyTree(index, key, this.props)
            }
            length={this.props.data.length}
            type='uniform'
            pageSize={100}
          />
        </div>
      </>
    );
  }
}
