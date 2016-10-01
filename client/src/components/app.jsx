const Army = require('./army');
const armyData = require('../army-data');

class App extends React.Component {
  render() {
    return (<Army data={ armyData } />);
  }
}

module.exports = App;