import { saveTweet, deleteTweet, saveLikeTweet } from '../utils/api';
import { showError } from './shared';
import { showLoading, hideLoading } from 'react-redux-loading';

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

function likeTweet(tweetId, authedUser, status) {
  return {
    type: LIKE_TWEET,
    liked: {
      tweetId,
      authedUser,
      status,
    }
  };
}

function removeTweet(tweet, authedUser) {
  return {
    type: DELETE_TWEET,
    id: tweet.id,
    author: authedUser,
  };
}

export function handleLikeTweet(tweetId, userId, status) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveLikeTweet(tweetId, userId, status)
      .then(({tweetId, userId, status}) => {
        console.log(tweetId, userId, status);
        return dispatch(likeTweet(tweetId, userId, status));
      })
      .then(() => dispatch(hideLoading()))
      .catch((err) => {
        console.error(err);
        return dispatch(showError(err));
      });
  };
}

export function handleCreateTweet(tweet) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveTweet(tweet)
      .then((newTweet) => {
        console.log(newTweet);
        return dispatch(createTweet(newTweet));
      })
      .then(() => dispatch(hideLoading()))
      .catch((err) => {
        console.error(err);
        return dispatch(showError(err));
      });
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
