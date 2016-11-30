import React from 'react';
// import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { Column, Table, SortDirection } from 'react-virtualized';
import 'react-virtualized/styles.css';
import armyData from '../army-data';

// const SortableTable = SortableContainer(Table);
// const SortableTableRowRenderer = SortableElement(defaultTableRowRenderer);

const data = armyData;

const tableWidth = 1400;
const tableHeight = 600;
const rowHeight = 40;

class UnitTable extends React.PureComponent {
  static getDatum(list, index) {
    return list.get(index % list.size);
  }

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
        label: 'Points/Wound',
        dataKey: 'ptr',
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
        flexGrow={1}
        {...col}
      />
    ));
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      sortBy: 'name',
      sortDirection: SortDirection.ASC,
    };

    this.sort = this.sort.bind(this);
  }

  sort({ sortBy, sortDirection }) {
    console.log({ sortBy, sortDirection });
    this.setState({ sortBy, sortDirection });
  }

  render() {
    const { sortBy, sortDirection } = this.state;

    const sortedList = armyData
      .filter(item => item.ptr && item.ptr !== 'N/A')
      .sortBy(item => +item[sortBy] || -1)
      .update(l => (
        sortDirection === SortDirection.DESC
          ? l.reverse()
          : l
      ));

    const rowGetter = ({ index }) => this.constructor.getDatum(sortedList, index);

    return (
      <Table
        // TODO: use autosizer here to get height and width
        width={tableWidth}
        height={tableHeight}
        rowGetter={rowGetter}
        rowHeight={rowHeight}
        rowCount={sortedList.size}
        headerHeight={20}
        sort={this.sort}
      >
        {this.constructor.renderColumns()}
      </Table>
    );
  }
}

export default UnitTable;
