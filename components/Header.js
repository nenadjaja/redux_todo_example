import React, { Component, PropTypes} from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
	handleSave(text) {
		if (text.length !== 0) {
			this.props.addTodo(text);
		}
	}

	render() {
		return (
			<header>
				<TodoTextInput placeholder="Add your todo item" 
					newTodo onSave={this.handleSave.bind(this)}/>
			</header>
		)
	}
}

Header.PropTypes = {
	addTodo: PropTypes.func.isRequired
}

export default Header;