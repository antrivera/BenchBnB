import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as SessionActions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  window.signup = SessionActions.signup;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;
  window.success = window.error = (data) => {console.log(data);};
  const store = window.Store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
