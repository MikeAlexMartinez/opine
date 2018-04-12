import { 
  CREATE_TWEET,
  DELETE_TWEET, 
  RECEIVE_TWEETS,
  LIKE_TWEET,
} from '../actions/tweets';

export default function tweets (state = {}, action) {
  switch(action.type) {
    case CREATE_TWEET:
      const {tweet} = action;
      const parent = tweet.replyingTo
        ? state[tweet.replyingTo]
        : null;
      return {
        ...state,
        [parent.id]: {
          ...parent,
          replies: parent.replies.concat([tweet.id]),
        },
        [tweet.id]: tweet
      };
    case DELETE_TWEET:
      return Object.keys(state).reduce((result, key) => {
        if (key !== action.id) {
          return result[key] = state[key];
        }
        return result;
      }, {});
    case RECEIVE_TWEETS:
      return {
        ...action.tweets
      };
    case LIKE_TWEET:
      const {tweetId, authedUser} = action;
      const tweet = state[tweetId];
      return {
        ...state,
        [tweetId]: {
          likes: tweet.likes.concat([authedUser]),
        }
      };
    default:
      return state;
  }
}
