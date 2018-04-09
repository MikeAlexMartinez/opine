import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveTweets } from '../actions/tweets';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

export const HANDLE_INITIAL_DATA = 'HANDLE_INITIAL_DATA';
export const SHOW_ERROR = 'SHOW_ERROR'; 

const AUTHED_ID = 'tylermcginnis';

export function showError (err) {
  return {
    type: SHOW_ERROR,
    error: err.message
  };
}

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(hideLoading());
      })
      .catch((err) => {
        console.warn(err);
      });
  };
}

