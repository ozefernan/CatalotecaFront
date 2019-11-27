/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyle from './shared/global';
import Routes from './routes';

export default function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
    </div>
  );
}

/* class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
        <GlobalStyle />
      </div>
    );
  }
}

export default App; */
