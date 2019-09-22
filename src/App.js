import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './shared/global';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
