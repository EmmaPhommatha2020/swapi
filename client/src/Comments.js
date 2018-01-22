import React, { Component } from 'react';
import './App.css';

class Comments extends Component {
  state = { comments: [], comment: '' }

  handleChange = (e) => {
    this.setState({comment: e.target.value});
  }
  
  postComment = (e) => {
    e.preventDefault();
    console.log(this.state.comment, '<== Post comment invoked');
    const comment = this.state.comment;
    if (comment !== '') {
      this.state.comments.push(comment);
      this.forceUpdate();
    } else {
      alert('Can\'t be empty')
    }
  }

  deleteComment = (e) => {
    e.preventDefault();
    console.log(this.state.comments)
    const comment = this.state.comment;
    this.state.comments.pop(comment);
    this.forceUpdate();
  }

  render() {
    const { comments } = this.state;
    const { postComment, deleteComment } = this.props;
    return (
      <div className="comments">
        <form onSubmit={this.postComment}>
          <input type="text" value={this.state.value} placeholder="Add a comment" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {comments.map(val => 
            <p key={val + new Date()}>
            {val} 
            <br />
            <span onClick={this.deleteComment}>Delete</span>
            </p>
          )}
      </div>
    );
  }
}

export default Comments;
