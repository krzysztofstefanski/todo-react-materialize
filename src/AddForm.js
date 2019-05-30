import React, { Component } from "react";

class AddForm extends Component {
  state = {
    content: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className for="add">
            Add new todo
          </label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <button className="btn blue text-darken-2">Submit</button>
        </form>
      </div>
    );
  }
}
export default AddForm;
