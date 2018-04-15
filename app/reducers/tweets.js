import { 
  CREATE_TWEET,
  DELETE_TWEET, 
  RECEIVE_TWEETS,
  LIKE_TWEET,
} from '../actions/tweets';

export default function tweets (state = {}, action) {
  switch(action.type) {
    case RECEIVE_TWEETS:
      return {
        ...action.tweets
      };
    case CREATE_TWEET:
      const {tweet} = action;
      const returnState = {
        ...state,
        [tweet.id]: tweet
      };
      if (tweet.replyingTo) {
        const parent = state[tweet.replyingTo];
        returnState[parent.id] = {
          ...parent,
          replies: parent.replies.concat([tweet.id])
        };
      }
      return returnState;
    case DELETE_TWEET:
      return Object.keys(state).reduce((result, key) => {
        if (key !== action.id) {
          return result[key] = state[key];
        }
        return result;
      }, {});
    case LIKE_TWEET:
      const {tweetId, authedUser, status} = action.liked;
      console.log(tweetId, authedUser, status);
      let likedTweet = state[tweetId];
      console.log(likedTweet);
      if (status) {
        likedTweet.likes = likedTweet.likes.concat([authedUser]);
      } else {
        likedTweet.likes = likedTweet.likes.filter((auth) => auth !== authedUser);
      }
      console.log(likedTweet);
      return {
        ...state,
        [tweetId]: {
          ...likedTweet
        }
      };
    default:
      return state;
  }
}
