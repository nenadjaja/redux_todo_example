import React, { Component, PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			editing: false
		}
	}

	handleDoubleClick() {
		this.setState({ editing: true });
	}

	render() {
		const { todo } = this.props;
		let element = <TodoTextInput text={todo.text} />
		
		return (
			<li>{element}</li>
		)
	}
}

export default TodoItem