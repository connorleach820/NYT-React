var React = require("react");
var helpers = require('../utils/helpers');
var axios = require('axios');

var Result = React.createClass({ 
	getInitialState: function() {
		return {
			title: "",
			date: "",
			url: ""
		}
	},
	componentDidMount: function() {
		this.setState({
			title: this.props.name,
			date: this.props.date,
			url: this.props.url			
		})
	},
	onClick: function(e) {
	
		this.props.savedQuery(this.state);

	},
	render:function() {					
		return (
			<div>
				<div>{this.props.name}</div>
				<div>{this.props.date}</div>				
				<div>{this.props.url}</div>
				<button onClick={this.onClick}>Save</button>			
			</div>
		)
	} 
});

module.exports = Result;
