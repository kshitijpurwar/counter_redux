import React, { Component } from 'react';
import Count from './components/count';
import Controls from './components/controls';

class App extends Component {
  render() {
    return (
      <div>
        <h1>A simple counter made using React and Redux</h1>
        <h4><a target="_blank" rel="noopener noreferrer" href="https://kshitijpurwar.com/react-counter">Click here for react only version</a></h4>
        <hr />
        <Count />
        <Controls />
      </div>
    )
  }
}

export default App;