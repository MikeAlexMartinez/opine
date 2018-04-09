const { tweets, users } = require('./_data');

exports.likeTweet = function ({tweetId, userId}) {
  
}

exports.saveTweet = function (tweet) {

}

exports.loadTweets = function () {
  return Promise((res, rej) => {
    const didFail = shouldThisRun();
    const delay = wait();

    setTimeout(() => {
      didFail
        ? rej(new Error('Error loading Tweets'))
        : res(tweets);
    }, delay);
  });
};

exports.loadUsers = function () {
  return Promise((res, rej) => {
    const didFail = shouldThisRun();
    const delay = wait();

    setTimeout(() => {
      didFail
        ? rej(new Error('Error loading Users'))
        : res(users);
    }, delay);
  });
};

exports.authenticateUser = function (user) {

};

/**
 * random function to simulate delay time
 * @return {number} - value in milliseconds
 */
function wait() {
  return Math.floor(Math.random() * (1000 - 100)) + 100;
}

/**
 * @return {boolean}
 */
function shouldThisRun() {
  return Math.floor(Math.random() * 100) <= 10; 
}