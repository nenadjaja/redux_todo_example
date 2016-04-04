import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const { todos } = this.props;
		console.log("MY TODOS", todos)
		return (
			<section>
				<ul>
					{todos.map(todo => 
						<TodoItem todo={todo} key={todo.id} />
					)}
				</ul>
			</section>
		)
	}
}

export default MainSection