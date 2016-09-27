const React = require('react');

class Army extends React.Component {
  getPtRatio({ points, wounds }) {
    return points / wounds;
  }

  renderRow({ name, wounds, desc, points }) {
    return (
      <tr>
        <td>{ name }</td>
        <td>{ wounds }</td>
        <td>{ points }</td>
        <td>{ this.getPtRatio({ points, wounds }) }</td>
        <td>{ desc }</td>
      </tr>
    );
  }

  render() {
    const {
      name,
      data: {
        heroes = [],
        units = [],
        monsters = [],
        warmachines = [],
        formations = []
      } 
    } = this.props;
    const rows = [...heroes, ...units, ...monsters, ...warmachines, ...formations];
    const sortedRows = rows.sort((a, b) => {
      return this.getPtRatio(a) - this.getPtRatio(b);
    });

    return (
      <div>
        <h1>{ name }</h1>
        <table>
          <tbody>{
            sortedRows.map((row) => {
              return this.renderRow(row);
            })
          }</tbody>
        </table>
      </div>
    );
  }
}

Army.proptypes = {
  name: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired
}

module.exports = Army;