const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/app');
const armiesData = require('./vendor/2016-09-25');

require('./style.css');

ReactDOM.render(<App />, document.getElementById('root'));

Object.keys(armiesData).forEach((armyName) => {
  console.log([armyName, armiesData[armyName]]);
});
