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

  // store the note
  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);

      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.setState({ text: e.target.value })
    }

  }

  completed() {
    if (this.state.completed) {
      return 'completed'
    } else {
      return 'editing'
    }
  }

  render() {
    return (
      <input className="todo-input"
        type="text" 
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
        onBlur={this.handleBlur.bind(this)} />
    )
  }
}

// set properties
TodoTextInput.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  onSave: PropTypes.func.isRequired
}

export default TodoTextInput