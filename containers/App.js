import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';

class App extends Component {
	render() {
		const {todos} = this.props;
		console.log("APP", todos)
		return (
			<div>
				<MainSection todos={todos} />
			</div>
		)
	} 
}

App.propTypes = {
	todos: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(
	mapStateToProps
)(App)