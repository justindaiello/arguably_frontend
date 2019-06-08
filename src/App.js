import React, { Component } from 'react';
import PollList from './PollList';
import './App.css';



class App extends Component {

  state = {
    pollView: true,
    openPolls: [],
    closedPolls: [],
  }

  //Toggle view for open and closed polls
  handleView = (view) => {
    this.setState({ pollView: view })
  }

  //Grab polls from our server
  fetchTasks = () => {
    fetch('http://localhost:3000/polls')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
      {this.fetchTasks()};
        <PollList view={this.state.pollView}/>
      </div>
    );
  }

}

export default App;
