import React, { Component } from 'react';
import { connect } from 'react-redux'

import { handleCreateTweet } from '../actions/tweets';

import Heading from './Heading';

class CreateTweet extends Component {
  state = {
    content: ''
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { content } = this.state;
    const { authedUser } = this.props;

    this.props.history.push('/');
    this.props.dispatch(handleCreateTweet(content, authedUser));
  }

  handleInputChange = (e) => {
    const { value, name} = e.target();
    this.setState(() => ({
      [name]: value
    }));
  }
  
  render () {
    const {content} = this.state;
    return (
      <div>
        <Heading title='Compose new Tweet' />
        <form submit={this.handleSubmit}>
          <input
            value={content}
            onChange={this.handleInputChange}
            name='content'
            className='input'
            id='content'
            maxLength='160'
            type='textarea'
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(CreateTweet); 
