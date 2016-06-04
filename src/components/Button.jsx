var React = require('react');
var HTTP = require('../services/httpservice');

module.exports = React.createClass({
	getInitialState: function() {
		return {HELLO: []};
	},
	handleClick: function(){
		alert('You clicked on ' + this.props.name);
	},
	componentWillMount: function() {
		HTTP.get('/todos').then(function(data) {
			this.setState({HELLO: data});
		}.bind(this));
	},
  	render: function(){
  		var styles = {
			padding: 20,
			margin: 10
		};
		var data = this.state.HELLO.map(function(dataItem,index){
			return <div key={dataItem.name+index} className="bg-primary">{dataItem.name}</div>
		});
    	return (
		    <div className="text-center">
		      <button style={styles} className="btn btn-success" onClick={this.handleClick}>{this.props.name}</button>
					{data}
		    </div>
		    );
  }
});
