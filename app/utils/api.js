const { 
  _getTweets,
  _getUsers,
  _saveTweet,
  _saveLike,
  _deleteTweet
} = require('./_data');

export function getInitialData () {
  return Promise.all([
    _getTweets(),
    _getUsers()
  ]).then(([tweets, users]) => ({
    users,
    tweets
  }));
}

export function saveTweet (tweet) {
  return _saveTweet(tweet);
}

export function deleteTweet(tweetId) {
  return _deleteTweet(tweetId);
}

export function saveLikeTweet(tweetId, author, status) {
  return _saveLike(tweetId, author, status);
}

/**
 * @return {boolean}
 *
function shouldThisRun() {
  return Math.floor(Math.random() * 100) < 10; 
}*/