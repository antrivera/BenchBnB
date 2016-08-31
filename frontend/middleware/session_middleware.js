import { SessionConstants, receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import * as SessionAPI from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const error = (data) => dispatch(receiveErrors(data));
  const authSuccess = (data) => dispatch(receiveCurrentUser(data));

  switch (action.type) {
    case SessionConstants.LOGIN:
      SessionAPI.login(action.data, authSuccess, error);
      return next(action);
    case SessionConstants.LOGOUT:
      const logoutSuccess = () => next(action)
      SessionAPI.logout(logoutSuccess, error);
      return next(action);
    case SessionConstants.SIGNUP:
      SessionAPI.signup(action.data, authSuccess, error);
      return next(action);
    default:
      return next(action);
  }
}

export default SessionMiddleware;
