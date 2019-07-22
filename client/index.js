import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main.js';

// STORE NOT CREATED YET
import { store } from './redux';

const appDiv = document.getElementById('app');

class HomePage extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

ReactDOM.render(<HomePage />, appDiv);
