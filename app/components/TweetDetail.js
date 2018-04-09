import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { handleLikeTweet } from '../actions/tweets';

class TweetDetail extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { dispatch, id, authedUser } = this.props;
    dispatch(handleLikeTweet(id, authedUser));
  }

  render () {
    const { users, userId } = this.props;
    const user = users.filter((u) => u.id === userId );
    return (
      <div className='tweet'>
        <div className='left'>
          <div className='tweet-img'>
            <img src={user.avatarURL} />
          </div>
          <div className='tweet-content'>
            <h4>{user.displayName}</h4>
            <p className='date'>{}</p>
          </div>
        </div>
      </div>
    );
  }
}

TweetDetail.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  userId: PropTypes.string,
  date: PropTypes.number,
  likes: PropTypes.array,
  replies: PropTypes.array,
  parentTweet: PropTypes.string,
  authedUser: PropTypes.string,
  Users: PropTypes.array,
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
} 

export default connect(mapStateToProps)(TweetDetail);