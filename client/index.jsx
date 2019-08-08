/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './containers/MainContainer';
import store from './store';

const appDiv = document.getElementById('app');

const App = () => (
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, appDiv);

export default App;
