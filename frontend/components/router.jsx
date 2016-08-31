import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SearchContainer from './search_container';
import BenchFormContainer from './bench_form_container';
import SessionFormContainer from './session_form_container';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace) {
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace) {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ SearchContainer } />
          <Route path="/login" onEnter={this._redirectIfLoggedIn} component={ SessionFormContainer } />
          <Route path="/signup" onEnter={this._redirectIfLoggedIn} component={ SessionFormContainer } />
          <Route path="/benches/new" onEnter={this._ensureLoggedIn} component={ BenchFormContainer } />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
