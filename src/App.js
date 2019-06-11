import React, { Component } from 'react';
import Form from './Components/Form'
import PollList from './Components/PollList';
import Header from './Components/Header'
import './App.css';
import Button from 'react-bootstrap/Button';



class App extends Component {

  state = {
    pollView: "t",
    openPolls: [],
    closedPolls: [],
    isHidden: true
  }

  //ES6 arrow functions on methods for binding

  //Toggle view for open and closed polls
  handleView = (view) => {
    this.setState({ pollView: view })
  }

  //Grab polls from our server
  fetchPolls = () => {
    fetch('https://arguably-us.herokuapp.com/polls')
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


  //Create a new Poll
  handleCreatePoll = (poll) => {
    fetch('https://arguably-us.herokuapp.com/polls', {
      body: JSON.stringify(poll),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdPoll => {
      return createdPoll.json()
    })
    .then(data => {
      this.updateArray(data, 'openPolls')
      this.handleView("t")
    })
    .catch(err => console.log(err))
  }

  //Update array with new poll
  updateArray = (poll, array) => {
    this.setState( prevState => {
      prevState[array].push(poll)
      console.log(prevState)
      return {
        [array]: prevState[array]
      }
    })
  }

  //Update Poll to be closed.
  handleCheck = (poll, arrayIndex, currentArray) => {
    poll.open = !poll.open
    fetch(`https://arguably-us.herokuapp.com/polls/${poll.id}`, {
      body: JSON.stringify(poll),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedPoll => {
      return updatedPoll.json()
    })
    .then(data => {
      this.removeFromArray(currentArray, arrayIndex)
      if(currentArray === "openPolls") {
        this.updateArray(data, "closedPolls")
      } else {
        this.updateArray(data, "openPolls")
      }
    })
    .catch(err => console.log(err))
  }

  //Delete Poll
  handleDelete = (pollId, arrayIndex, array) => {
    fetch(`https://arguably-us.herokuapp.com/polls/${pollId}`, {
      method: 'DELETE'
    })
    .then(data => {
      this.removeFromArray(array, arrayIndex)
    })
    .catch(err => console.log(err))
  }

  //Remove from array
  removeFromArray = (array, arrayIndex) => {
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  //Toggle whether or not you can see the form.
  toggleHidden = () => {
    this.setState({ isHidden: !this.state.isHidden})
  }

  componentDidMount() {
    this.fetchPolls()
    console.log(this.state.openPolls);
    console.log(this.state.closedPolls);
  }

  render() {
    return (
      <div className="arguably-container">
        <Header
          pollView={this.state.pollView}
          handleView={this.handleView}
        />
        <button
          onClick={this.toggleHidden}>
          Add A Poll
        </Button>
        {!this.state.isHidden && <Form handleCreatePoll={this.handleCreatePoll}/>}
        <PollList
          view={this.state.pollView}
          openPolls={this.state.openPolls}
          closedPolls={this.state.closedPolls}
          handleDelete={this.handleDelete}
          handleView={this.handleView}
          handleCheck={this.handleCheck}
        />
      </div>
    );
  }

}

export default App;
