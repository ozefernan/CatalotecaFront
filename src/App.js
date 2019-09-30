import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyle from './shared/global';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
        <GlobalStyle />
      </div>
    )
  }
}

export default App;
