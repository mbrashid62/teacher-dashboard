import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentInput from '../src/components/StudentInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome</p>
        </header>
        <StudentInput />
      </div>
    );
  }
}

export default App;
