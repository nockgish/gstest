import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloYou from './components/HelloYou';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: " "
    }
  }

  inputChange = e => {
    this.setState({ name: e.target.value })
 }

  submitLoanPost = e => {
    axios
    .post("https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec"
    )
    .then(response => {
      // console.log(response);
      const data = response.data.terms;
      console.log(data);
      // const firstOne = data[0].NOI;
      // this.setState({terms: firstOne })
      setTimeout( () => {
        // console.log(this.state.terms)
      }, 100)
    })
    .catch( error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Loan Offers</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <input type="text" className="nameInput" onChange={this.inputChange} />
        <HelloYou name={this.state.name}/> */}
        <input className="submitLoanReq" type="submit" value="Send Request" onClick={this.submitLoanPost} />
        {/* <p>{this.state.terms}</p> */}
      </div>
    );
  }
}

export default App;


