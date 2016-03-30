import React, { Component, PropTypes } from 'react';

class TodoTextInput extends Component {
	constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    }
  }
  
	// set new state
	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	render() {
		return (
			<input type="text" 
				placeholder={this.props.placeholder}
				autoFocus="true"
				value={this.state.text}
				onChange={this.handleChange.bind(this)} />
		)
	}
}

// set properties
TodoTextInput.propTypes = {
	text: PropTypes.string,
	placeholder: PropTypes.string
}

export default TodoTextInput