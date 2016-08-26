import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  window.Store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<div> it worked </div>, root);
});
