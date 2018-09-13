import React from 'react';
import '../index.css';

class HelloYou extends React.Component {
    constructor(props) {
        super(props);
    };

render() {
    return(
        <div>
          <p className="hiName">Recent News From:  <span>{this.props.newsSource}</span></p>
        </div>
    )
}
}

export default HelloYou;