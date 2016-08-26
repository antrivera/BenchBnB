import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestBenches, receiveBenches } from './actions/bench_actions';

document.addEventListener("DOMContentLoaded", () => {
  window.Store = configureStore();
  window.requestBenches = requestBenches;
  window.receiveBenches = receiveBenches;
  const root = document.getElementById('root');
  ReactDOM.render(<div> it worked </div>, root);
});
