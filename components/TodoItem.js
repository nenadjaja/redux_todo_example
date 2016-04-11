import React, { Component, PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {
	constructor(props, context) {
		super(props, context);
	}

	handleSave(text) {
		if (text.length === 0) {
			this.props.deleteTodo;
		} else {
			this.props.editTodo;
		}
	}

	render() {
		const { todo, deleteTodo } = this.props;
		let element = <TodoTextInput text={todo.text} onSave={(text) => this.handleSave(text)}/>
		
		return (
			<li>
				{element}
				<button onClick={() => deleteTodo(todo.id)}>Delete</button>
			</li>
		)
	}
}

TodoItem.PropTypes = {
	todo: PropTypes.object.isRequired,
	deleteTodo: PropTypes.func.isRequired
}


export default TodoItem