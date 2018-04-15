import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import moment from 'moment';
require('../../stylesheets/components/Tweet.scss');

import {handleLikeTweet} from '../actions/tweets';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faReply from '@fortawesome/fontawesome-free-solid/faReply';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

function formatDate(timestamp) {
  const now = moment(timestamp);
  return now.format('h:mm A | D/M/YYYY');
}

class Tweet extends Component {
  
  handleLike = (status) => {
    const { authedUser, tweetid, dispatch } = this.props;
    console.log(tweetid, status, authedUser);
    dispatch(handleLikeTweet(tweetid, authedUser, status));
  }

  render() {
    const { users, tweets, tweetid, authedUser } = this.props;
    const tweet = tweets[tweetid];
    const user = users[tweet.author];
    const parentTweet = tweets[tweet.replyingTo] || null;
    const replyingToUser = parentTweet && parentTweet.author;
    const liked = tweet.likes.indexOf(authedUser) !== -1;

    return (
      <div className='tweet'>
        <div className='tweet-avatar-container'>
          <img src={user.avatarURL} />
        </div>
        <div className='tweet-content'>
          <h3 className='tweet-name'>{user.name}</h3>
          <p className="tweet-date">{formatDate(tweet.timestamp)}</p>
          <p className="parent">{
            replyingToUser
              ? `Replying to @${replyingToUser}`
              : '' 
          }</p>
          <p className='tweet-text'>{tweet.text}</p>
          <div className='tweet-controls'>
            <FontAwesomeIcon icon={faReply} />
            <p className='reply-count'>{tweet.replies.length || ''}</p>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={(e) => {
                e.preventDefault();
                this.handleLike(!liked);
              }}
              style={liked ? {color: '#e82c2c'} : {color: '#282828'}}
            />
            <p className='likes-count'>{tweet.likes.length || ''}</p>          
          </div>
        </div> 
      </div>
    );
  }
}

Tweet.propTypes = {
  dispatch: PropTypes.func,
  users: PropTypes.object,
  tweets: PropTypes.object,
  tweetid: PropTypes.string,
  authedUser: PropTypes.string,
};

function mapStateToProps({ authedUser, users, tweets }) {
  return {
    authedUser,
    users,
    tweets
  };
}

export default connect(mapStateToProps)(Tweet);
