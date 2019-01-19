import React, { Component } from 'react';
import './App.css';

import StudentInput from '../src/components/StudentInput';
import EntryList from '../src/components/EntryList';
import Stats from '../src/components/Stats';
import EditModal from './components/EditModal';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <p className="greeting">Welcome! Enter Grades Below.</p>
        </header>
        <StudentInput />
        <EditModal />
        <EntryList />
        <Stats />
      </div>
    );
  }
}

export default App;
