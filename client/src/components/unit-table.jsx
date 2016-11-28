import React from 'react';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
import armyData from '../army-data';

const data = armyData;

const tableWidth = 1400;
const tableHeight = 600;
const rowHeight = 40;

class UnitTable extends React.PureComponent {

  static renderColumns() {
    const columns = [
      {
        label: 'Name',
        dataKey: 'name',
      },
      {
        label: 'Faction',
        dataKey: 'faction',
      },
      {
        label: 'Type',
        dataKey: 'type',
      },
      {
        label: 'Profile',
        dataKey: 'profile',
      },
      {
        label: 'Size',
        dataKey: 'size',
      },
      {
        label: 'Models',
        dataKey: 'models',
      },
      {
        label: 'Wounds',
        dataKey: 'wounds',
      },
      {
        label: 'Points',
        dataKey: 'points',
      },
      {
        label: 'Desc',
        dataKey: 'desc',
      },
    ];

    const colWidth = tableWidth / columns.length;

    return columns.map((col, i) => (
      <Column
        key={i}
        width={colWidth}
        {...col}
      />
    ));
  }

  render() {
    return (
      <Table
        width={tableWidth}
        height={tableHeight}
        rowGetter={({ index }) => data[index]}
        rowHeight={rowHeight}
        rowCount={data.length}
        headerHeight={20}
      >
        {this.constructor.renderColumns()}
      </Table>
    );
  }
}

export default UnitTable;
