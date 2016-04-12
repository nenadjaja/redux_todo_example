import React, { Component, PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {
	constructor(props, context) {
		super(props, context);
	}

	handleSave(id, text) {
		if (text.length === 0) {
			this.props.deleteTodo(id);
		} else {
			this.props.editTodo(id, text);
		}
	}

	render() {
		const { todo, deleteTodo } = this.props;
		let element = <TodoTextInput text={todo.text} 
										onSave={(text) => this.handleSave(todo.id, text)}/>
		
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