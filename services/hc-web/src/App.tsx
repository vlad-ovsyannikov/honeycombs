import React from 'react';

import { Button } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button>Hello Semantic UI</Button>
      </header>
    </div>
  );
}

export default App;
