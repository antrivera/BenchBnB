import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
      &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const userGreeting = (currentUser, logout) => (
  <div className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({currentUser, logout}) => {
  if (currentUser)
    return userGreeting(currentUser, logout);
  else
    return sessionLinks();
};

export default Greeting;
