import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloYou from './components/HelloYou';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
     
    }
  }

  inputChange = e => {
    this.setState({ name: e.target.value })
 }

 submitLoanPost = e => {
    console.log('anything at all');
    axios
    .get("//newsapi.org/v2/everything?domains=wsj.com&apiKey=ecba291e2bf642f7898dd5cff6bc5310"
    )
    .then(response => {
      console.log(response);
      const archIt = response.data.articles;
      this.setState({thenews: archIt});
      setTimeout( () => {
        console.log(this.state.thenews[0]);
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
          <h1>Sample Text Header</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <input type="text" className="nameInput" onChange={this.inputChange} />
        <HelloYou name={this.state.name}/> */}
        <input className="submitLoanReq" type="submit" value="Send Request" onClick={this.submitLoanPost} />
        <p>{}</p>
      </div>
    );
  }
}

export default App;


