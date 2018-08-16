import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloYou from './components/HelloYou';
import axios from 'axios';
// import { networkFirst } from 'sw-toolbox';

let newsSource;

class App extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  inputChange = e => {
    this.setState({ name: e.target.value })
  }

  acceptInput = e => {
    this.setState({ clientInput: e.target.value });

    setTimeout(() => {
      console.log(this.state.clientInput);
      // let newsSourceNameSlice = (this.state.clientInput).slice(-1);
      newsSource = this.state.clientInput;
    }, 500)
  }

  submitLoanPost = e => {
    console.log('anything at all');
    axios
      .get("https://newsapi.org/v2/top-headlines?sources=" + newsSource + "&apiKey=ecba291e2bf642f7898dd5cff6bc5310"
      )
      .then(response => {
        console.log(response);
        const archIt = response.data.articles;

        console.log(archIt[0]);

        this.setState({
          responseGood: true,
          author1: archIt[0].author,
          title1: archIt[0].title,
          description1: archIt[0].description,
          author2: archIt[1].author,
          title2: archIt[1].title,
          description2: archIt[1].description
        });
        setTimeout(() => {
          // console.log(this.state.thenews[0]);
          console.log(this.state.author1);
        }, 500)
      })
      .catch(error => {
        console.log(error);
        this.setState({
          responseGood: false
        })
      })

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Do you know the code for a newsAPI source?</h1>
          <input className="enterSource" type="text" onChange={this.acceptInput} onKeyDown={this.acceptInput}/>
        <p>{this.state.clientInput}</p>
        <input className="submitLoanReq" type="submit" value="Send Request" onClick={this.submitLoanPost} />
        </header>
        
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <input type="text" className="nameInput" onChange={this.inputChange} />
        <HelloYou name={this.state.name}/> */}
        {/* do a radio button selection */}
        {
          this.state.responseGood ?
            <div>
              <h2>{this.state.title1}</h2>
              <p className="author">{this.state.author1}</p>
              <p className="articleSummary">{this.state.description1}</p>
              <h2>{this.state.title2}</h2>
              <p className="author">{this.state.author2}</p>
              <p className="articleSummary">{this.state.description2}</p>
            </div>
            : this.state.responseGood ? <p>nothing yet</p>
            : this.state.responseGood === undefined ? null : <p>nothing available</p>
        }

      </div>
    );
  }
}

export default App;


