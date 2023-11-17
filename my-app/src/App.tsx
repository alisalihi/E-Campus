import React from 'react';
import logo from './logo.svg';
import './App.css';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Transport } from './components/Transport/Transport';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={`${resets.clapyResets} ${classes.root}`}>
      <Transport />
    </div>
        
      </header>
    </div>
  );
}

export default App;
