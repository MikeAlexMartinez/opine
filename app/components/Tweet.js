import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from './moment';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faReply from '@fortawesome/fontawesome-free-solid/faReply';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

function formatDate(timestamp) {
  const now = moment(timestamp);
  return now.format('h:m A | D/M/YYYY');
}

class Tweet extends Component {
  render() {
    const { users, authedUser, tweets, tweetId } = this.props;
    const tweet = tweets[tweetid];
    const user = users[tweet.author];
    const parentTweet = tweets[tweet.replyingTo] || null;
    const replyingToUser = parentTweet && parentTweet.author;

    return (
      <div className='tweet'>
        <div className='tweet-avatar-container'>
          <img src={user.avatarURL} />
        </div>
        <div className='tweet-content'>
          <h3 className='tweet-name'>{user.name}</h3>
          <p className="tweet-date">{formatDate(timestamp)}</p>
          <p className="parent">{
            replyingToUser
              ? `Replying to @${replyingToUser}`
              : '' 
          }</p>
          <p className='tweet-content'>{tweet.text}</p>
          <div className='tweet-controls'>
            <FontAwesomeIcon icon={faReply} />
            <p className='reply-count'>{tweet.replies.length || ''}</p>
            <FontAwesomeIcon icon={faHeart} />
            <p className='likes-count'>{tweet.likes.length || ''}</p>          
          </div>
        </div> 
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, tweets }) {
  return {
    authedUser,
    users,
    tweets
  };
}

export default connect(mapStateToProps)(Tweet);
