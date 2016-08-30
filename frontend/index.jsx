import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestBenches, receiveBenches } from './actions/bench_actions';
import SearchContainer from './components/search_container';
import { Provider } from 'react-redux';

const Root = ({store}) => (
  <Provider store={store}>
    <SearchContainer />
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.requestBenches = requestBenches;
  window.receiveBenches = receiveBenches;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
