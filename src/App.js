import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloYou from './components/HelloYou';
import axios from 'axios';
// import { networkFirst } from 'sw-toolbox';

let newsSource;
let articlesFrom;

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
        
        
        console.log(archIt[0], archIt.length, archIt);

        
        this.setState({
          responseGood: true,
          author1: archIt[0].author,
          title1: archIt[0].title,
          url1: archIt[0].url,
          description1: archIt[0].description,
          author2: archIt[1].author,
          title2: archIt[1].title,
          url2: archIt[1].url,
          description2: archIt[1].description,
          data: archIt
        });

        console.log(this.state.data);

        

        setTimeout(() => {
          // console.log(this.state.thenews[0]);
          console.log(this.state.author1);
          console.log(this.state.data)
        }, 1500)
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
          <h1>Do you know the <a className="codeLink" target="_blank" href="https://newsapi.org/sources">code</a> for a newsAPI source?</h1>
          <span>For Example: try <code>cnn</code> or <code>reuters</code> or <code>le-monde</code></span>
          <input className="enterSource" type="text" onChange={this.acceptInput} onKeyDown={this.acceptInput} />
          <p>{this.state.clientInput}</p>
          <input className="submitLoanReq" type="submit" value="Send Request" onClick={this.submitLoanPost} />
        </header>
        {
          this.state.responseGood ?
            <div className="returns">

              <a href={this.state.data[0].url}><h2>{this.state.data[0].title}</h2></a>
              <p className="author">{this.state.data[0].author}</p>
              <p className="articleSummary">{this.state.data[0].description}</p>
              <a href={this.state.data[1].url}><h2>{this.state.data[1].title}</h2></a>
              <p className="author">{this.state.data[1].author}</p>
              <p className="articleSummary">{this.state.data[1].description}</p>
              <a href={this.state.data[2].url}><h2>{this.state.data[2].title}</h2></a>
              <p className="author">{this.state.data[2].author}</p>
              <p className="articleSummary">{this.state.data[2].description}</p>
              <a href={this.state.data[3].url}><h2>{this.state.data[3].title}</h2></a>
              <p className="author">{this.state.data[3].author}</p>
              <p className="articleSummary">{this.state.data[3].description}</p>
              <a href={this.state.data[4].url}><h2>{this.state.data[4].title}</h2></a>
              <p className="author">{this.state.data[4].author}</p>
              <p className="articleSummary">{this.state.data[4].description}</p>
              <a href={this.state.data[5].url}><h2>{this.state.data[5].title}</h2></a>
              <p className="author">{this.state.data[5].author}</p>
              <p className="articleSummary">{this.state.data[5].description}</p>
            </div>
            : this.state.responseGood ? <p>nothing yet</p>
            : this.state.responseGood === undefined ? null : <p>nothing available</p>
        }
      <div>
      </div>
      </div>
    );
  }
}

export default App;


