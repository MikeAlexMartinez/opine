'use strict';

import { RECEIVE_USERS } from '../actions/users';
import { CREATE_TWEET, DELETE_TWEET } from '../actions/tweets';

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...action.users
      };
    case CREATE_TWEET:
      const { id, author } =  action.tweet;
      const user = state[author];
      return {
        ...state,
        [author]: {
          ...user,
          tweets: user.tweets.concat([id]),
        },
      };
    case DELETE_TWEET:
      const {id, author} = action;
      const user = state[author];
      return {
        ...state,
        [author]: {
          ...user,
          tweets: user.tweets.filter((v) => id === v),
        },
      };
    default:
      return state;
  }
}
