const { 
  _getTweets,
  _getUsers,
  _saveTweet,
  _saveLike,
  _deleteTweet
} = require('./_data');

export function getInitialData () {
  return shouldThisRun()
    ? Promise.all([
        _getTweets(),
        _getUsers()
      ]).then(([tweet, users]) => ({
        users,
        tweets
      }))
    : new Error('Issue loading data');
}

export function saveTweet (tweet) {
  return shouldThisRun()
    ? _saveTweet(tweet)
    : new Error('Error saving tweet');
}

export function deleteTweet(tweetId) {
  return shouldThisRun() 
    ? _deleteTweet(tweetId)
    : new Error('Error deleting tweet');
}

export function likeTweet(tweetId, author) {
  return shouldThisRun() 
    ? _saveLike(tweetId, author)
    : new Error('Error saving like');
}

/**
 * @return {boolean}
 */
function shouldThisRun() {
  return Math.floor(Math.random() * 100) < 10; 
}