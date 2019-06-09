import React, { Component } from 'react';
import PollList from './Components/PollList';
import './App.css';



class App extends Component {

  state = {
    pollView: "t",
    openPolls: [],
    closedPolls: [],
  }

  //ES6 arrow functions on methods for binding

  //Toggle view for open and closed polls
  handleView = (view) => {
    this.setState({ pollView: view })
  }

  //Grab polls from our server
  fetchPolls = () => {
    fetch('http://localhost:3000/polls')
    .then(res => res.json())
    .then(data => {
      this.sortPolls(data);
    })
  }

  //Sort polls into open of closed arrays in state
  sortPolls = (polls) => {
    let openPolls = []
    let closedPolls = []

    //Sort polls into open or closed based on boolean value
    polls.forEach(poll => {
      if (poll.open === "t") {
        openPolls.push(poll)
      } else {
        closedPolls.push(poll)
      }
    })
    //trigger rerender & update polls
    this.setState({
      openPolls: openPolls,
      closedPolls: closedPolls
    })
  }

  componentDidMount() {
    this.fetchPolls()
  }

  render() {
    return (
      <div className="arguably-container">
        <PollList
          view={this.state.pollView}
          openPolls={this.state.openPolls}
          closedPolls={this.state.closedPolls}
        />
      </div>
    );
  }

}

export default App;
