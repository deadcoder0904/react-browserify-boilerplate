var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./components/Button.jsx');

var Buttons = React.createClass({
	render: function(){
		return(
			<div className="container">
				<Button name="CHAMPION"/>
			</div>
		);
	}
});

ReactDOM.render(<Buttons />, document.getElementById('main'));
