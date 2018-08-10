import React from 'react';
import '../index.css';

class HelloYou extends React.Component {
    constructor(props) {
        super(props);
    };

render() {
    return(
        <div>
          <p className="hiName">Hi there <span>{this.props.name}</span></p>
        </div>
    )
}
}

export default HelloYou;