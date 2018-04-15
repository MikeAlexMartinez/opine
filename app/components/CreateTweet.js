import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
require('../../stylesheets/components/CreateTweet.scss');

import { handleCreateTweet } from '../actions/tweets';

import Heading from './Heading';

class CreateTweet extends Component {
  state = {
    content: ''
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { content } = this.state;
    const { authedUser, replyingTo } = this.props;

    const tweet = {
      text: content,
      author: authedUser,
      replyingTo: replyingTo || null,
    };

    this.props.history.push('/');
    this.props.dispatch(handleCreateTweet(tweet, authedUser));
  }

  handleInputChange = (e) => {
    const {value, name} = e.target;
    this.setState(() => ({
      [name]: value
    }));
  }
  
  render () {
    const {content} = this.state;
    return (
      <div>
        <Heading title='Compose new Tweet' />
        <form onSubmit={this.handleSubmit} className="new-tweet-form">
          <textarea
            value={content}
            onChange={this.handleInputChange}
            name='content'
            className='input'
            id='content'
            placeholder="What's happening?"
            maxLength='160'
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

CreateTweet.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  authedUser: PropTypes.string,
  replyingTo: PropTypes.string,
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(CreateTweet); 
