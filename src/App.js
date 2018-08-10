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
    .post("https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec", 
    {
      income: 3000023,
      expenses: 22123,
      rate: 3.22,
      noi: 20000,
      address: {
        street  : '1 Bacon Street',
        city    : 'Brooklyn',
        state   : 'NY',
        county  : 'Kings County',
        zip     : '11216'
      },
      postLimit : '3'
    })
    .then(response => {
      console.log(response);
      const data = response.data.results
    })
    .catch( error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <input type="text" className="nameInput" onChange={this.inputChange} />
        <HelloYou name={this.state.name}/>
          
        <input type="submit" value="Send Request" onClick={this.submitLoanPost} />
      </div>
    );
  }
}

export default App;
