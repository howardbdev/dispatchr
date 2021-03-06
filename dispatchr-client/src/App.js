import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/white_cross_red_border.jpeg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dispatchr</h1>
        </header>
        <MainContainer/>
      </div>
    );
  }
}

export default App;
