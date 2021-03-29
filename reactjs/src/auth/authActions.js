import { LOGIN_REQUEST, SUCCESS, FAILURE } from './authTypes';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const success = () => ({
  type: SUCCESS,
  payLoad: true,
});

const failure = () => ({
  type: FAILURE,
  payload: false,
});

export const authenticateUser = (username, password) => {
  return dispatch => {
    dispatch(loginRequest());
    if (username === 'and' && password === '1') {
      dispatch(success());
    } else {
      dispatch(failure());
    }
  };
};
