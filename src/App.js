import React, { Component } from 'react';
import PollList from './PollList';
import './App.css';



class App extends Component {

  state = {
    view: true,
    openPolls: [],
    closedPolls: [],
  }

  render() {
    return (
      <div className="App">
        <PollList />
      </div>
    );
  }

}

export default App;
