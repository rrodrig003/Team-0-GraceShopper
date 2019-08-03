import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './containers/MainContainer';
import store from './store';

const appDiv = document.getElementById('app');

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, appDiv, () => console.log('DOM RENDERED'));

export default App;