const { loadTweets, loadUsers } = require('../app/utils/api');

function handleError(err) {
  console.warn(err);
}

setTimeout(async function () {
  const tweets = await loadTweets().catch(handleError);
  console.log(tweets.length + ' tweets retrieved');
}, 1000);