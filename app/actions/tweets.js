import { saveTweet, deleteTweet, likeTweet } from '../utils/api';
import { showError } from './shared';
import { showLoading, hideLoading } from 'react-redux-loading';
import { _saveLike } from '../utils/_data';

// constants
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const CREATE_TWEET = 'CREATE_TWEET';
export const LIKE_TWEET = 'LIKE_TWEET';
export const DELETE_TWEET = 'DELETE_TWEET';

// action creators
export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}

function createTweet(tweet) {
  return {
    type: CREATE_TWEET,
    tweet
  };
}

function likeTweet(tweetId, authedUser) {
  return {
    type: LIKE_TWEET,
    tweetId,
    authedUser
  };
}

function removeTweet(tweet, authedUser) {
  return {
    type: DELETE_TWEET,
    id: tweet.id,
    author: authedUser,
  };
}

export function handleLikeTweet(tweetId, userId) {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveLike(tweetId, userId)
      .then(() => dispatch())
  }
}

export function handleCreateTweet(tweet) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveTweet(tweet)
      .then(() => dispatch(createTweet(tweet)))
      .then(() => dispatch(hideLoading()))
      .catch((err) => dispatch(showError(err)));
  };
}

export function handleDeleteTweet(tweet) {
  return (dispatch) => {
    dispatch(showLoading());
    return deleteTweet(tweet.id)
      .then(() => dispatch(removeTweet(tweet)))
      .then(() => dispatch(hideLoading()))
      .catch((err) => dispatch(showError(err))); 
  };
}
