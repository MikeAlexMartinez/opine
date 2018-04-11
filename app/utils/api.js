const { 
  _getTweets,
  _getUsers,
  _saveTweet,
  _saveLike,
  _deleteTweet
} = require('./_data');

export function getInitialData () {

}

/**
 * @return {boolean}
 */
function shouldThisRun() {
  return Math.floor(Math.random() * 100) <= 10; 
}