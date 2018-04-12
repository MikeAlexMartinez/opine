import { 
  CREATE_TWEET,
  DELETE_TWEET, 
  RECEIVE_TWEETS,
  LIKE_TWEET,
} from '../actions/tweets';

export default function tweets (state = {}, action) {
  switch(action.type) {
    case CREATE_TWEET:
      return {
        ...state,
        [action.tweet.id]: action.tweet
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
        ...state,
        ...action.tweets
      }
    case LIKE_TWEET:
      return {
        ...state,
        []
      }
    default:
      return state;
  }
}