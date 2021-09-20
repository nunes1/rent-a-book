import * as userActions from '../actions/user';

const userInitialState = {
  name: '',
  error: null,
  isFetching: false,
  loggedIn: false,
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case userActions.DO_LOGIN_FETCHING:
      return { ...state, isFetching: true };
    case userActions.DO_LOGIN_SUCCESS:
      return {
        ...state,
        name: action.response,
        isFetching: false,
        loggedIn: true,
        error: null,
      };
    case userActions.DO_LOGIN_FAILED:
      return { ...state, error: action.response, isFetching: false };
    default:
      return state;
  }
};

export default userReducer;
