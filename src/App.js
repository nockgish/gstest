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
      data: []
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
          data: archIt,
          name: archIt[0].source.name
        });

        console.log(this.state.data, this.state.name);

        setTimeout(() => {
          console.log(this.state.data);
        }, 1500)
      })
      .catch(error => {
        console.log(error);
        this.setState({
          responseGood: false
        })
      })
  }

  // focusMethod = e => {
  //     //  console.log(e);
  //      if(e.key == 'Enter'){
  //       console.log(e)
  //     }
  // }

  listenEnter = e => {
    console.log('hello', e);
    e.key === "Enter" ? this.submitLoanPost() : ''
  }

  render() {
    let datas = this.state.data;
    console.log(datas[0])
    return (

      <div className="App">
        <header className="App-header">
          <h1>Do you know the <a className="codeLink" target="_blank" href="https://newsapi.org/sources">code</a> for a newsAPI source?</h1>
          <span>For Example: try <code>cnn</code> or <code>reuters</code> or <code>le-monde</code></span>
          <input className="enterSource" type="text" onKeyPress={this.listenEnter} onChange={this.acceptInput} onKeyDown={this.acceptInput} />
          {/* this button would be calling an action: (type: 'CHANGE_NEWS_SOURCE') */}
          <p>{this.state.clientInput}</p>
          <input className="submitLoanReq" type="submit" value="get the news ►" onClick={this.submitLoanPost} />
        </header>
        <HelloYou newsSource={this.state.name} />
        {
          this.state.responseGood ?
            <div className="returns">
              {
                datas.map(
                  oneData =>
                    <div className="oneArticle" key={oneData.publishedAt + Math.random()}>
                      <a href={oneData.url} target="_blank" rel="noopener noreferrer"><h2>{oneData.title}</h2></a>
                      {
                        oneData.author ?
                          <p className="author">by {oneData.author}</p> : ''
                      }
                      <p className="time">published: {oneData.publishedAt}</p>
                      <p className="articleSummary">{oneData.description}</p>
                      {/* {
                        oneData.urlToImage ?
                          <img src={oneData.urlToImage} alt="image for article" /> : ''
                      } */}
                      {
                      oneData.urlToImage ? <a href={oneData.url} target="_blank" rel="noopener noreferrer">
                                           <div className="imgSq" style={{backgroundImage: `url(${oneData.urlToImage})`}}>
                                           </div></a> : ''
                      }
                    </div>
                        )
              }
            </div>
            : this.state.responseGood ? <p>nothing yet</p>
            : this.state.responseGood === undefined ? null : <p className="nothingA">nothing available</p>
        }


      </div>
    );
  }
}

export default App;


