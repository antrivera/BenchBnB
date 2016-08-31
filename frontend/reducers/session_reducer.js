import { SessionConstants } from '../actions/session_actions';
import { merge } from 'lodash';

const nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = nullUser, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, nullUser, {currentUser: action.data});
    case SessionConstants.RECEIVE_ERRORS:
      return merge({}, nullUser, {errors: [action.data]});
    case SessionConstants.LOGOUT:
      return merge({}, nullUser);
    default:
      return state;
  }
}

export default SessionReducer;
