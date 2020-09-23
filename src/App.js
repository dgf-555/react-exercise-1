import React, { Component } from 'react';
import './App.scss';
import Introduction from './components/introduce/Introduce';
import Greeting from './components/greeting/Greeting';
import Education from './components/education/Education';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Greeting />
        <Introduction />
        <Education />
      </main>
    );
  }
}

export default App;
