import React, { Component } from 'react'

export class AddToList extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToList(this.state.title);
    this.setState({title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]:e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
        type="text" 
        name="title" 
        style={{ flex: '8', padding: '5px'}}
        placeholder="Add to List" 
        value={this.state.title}
        onChange={this.onChange} />
        <input
        type="submit"
        value="submit"
        className="btn"
        />
      </form>
    )
  }
}

export default AddToList;