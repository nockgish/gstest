import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloYou from './components/HelloYou';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: " "
    }
  }

  inputChange = e => {
    this.setState({ name: e.target.value})
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="App-title">Welcome to React</h1> */}
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <input className="nameInput" onChange={this.inputChange} />
        <HelloYou name={this.state.name}/>
      </div>
    );
  }
}

export default App;
