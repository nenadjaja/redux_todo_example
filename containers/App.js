import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';

class App extends Component {
	render() {
		const {todos} = this.props;

		return (
			<div>
				<MainSection todos={todos} />
			</div>
		)
	} 
}

module.exports = App;