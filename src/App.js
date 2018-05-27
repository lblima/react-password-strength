import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PasswordInput from './components/password-input';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      password: ''
    };

    this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
  }

  handlePasswordChanges(event) {
    this.setState({ password: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Strength Indicator Component</h1>
        </header>
        <p className="App-intro">
          <PasswordInput  
            value={this.state.password}
            placeholder='Type your password'
            handleChanges={this.handlePasswordChanges}
          />
        </p>
      </div>
    );
  }
}

export default App;
