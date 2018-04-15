import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TweetList from './TweetList';

class TweetDetail extends Component {

  render () {
    const { users, userId } = this.props;
    const user = users[userId];
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
  dispatch: PropTypes.func,
  id: PropTypes.string,
  authedUser: PropTypes.string,
  userId: PropTypes.string,
  users: PropTypes.object
};

function mapStateToProps({ authedUser, users, tweets }, {match}) {
  const {tweetId} = match.params;
  const author = tweets[tweetId].author;

  return {
    userId: author,
    authedUser,
    users,
  };
} 

export default connect(mapStateToProps)(TweetDetail);