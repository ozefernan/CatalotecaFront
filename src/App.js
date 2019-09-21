import React from 'react';
import GlobalStyle from './shared/global';
import Nav from '../src/pages/components/home/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
    </div>
  );
}

export default App;
