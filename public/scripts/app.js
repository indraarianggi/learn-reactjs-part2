'use strict';

// JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'Oolloo World! This is JSX syntax from src/app.js'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
