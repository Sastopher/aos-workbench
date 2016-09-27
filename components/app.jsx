const React = require('react');
const Army = require('./army');
const armyData = require('../vendor/2016-09-25/gwPoolPoints.csv');

class App extends React.Component {
  render() {
    return (<Army data={ armyData } />);
  }
}

module.exports = App;