var React = require("react");
var ReactDOM = require('react-dom');
var Main = require('./components/main');


var routes = require('./config/routes.js');

ReactDOM.render(
	
	<Main/>,
	document.getElementById('app')
)