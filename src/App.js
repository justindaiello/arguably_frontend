import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Poll from 'react-polls';

const pollQuestion = 'Does this work?';
const pollAnswers = [
  { option: 'Yes', votes: 0},
  { option: 'No', votes: 0}
]

class App extends Component {

  state = {
    pollAnswers: [...pollAnswers]
  }

  handleVote = (voteAnswer) => {
    const { pollAnswers } = this.state
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) {
        answer.votes++
        return answer
      }
    })
    this.setState({ pollAnswers: newPollAnswers })
  }


  render() {
    return (
      <div className="App">
        <Poll question={pollQuestion}
              answers={pollAnswers}
              onVote={this.handleVote}
              customStyles={{ theme: 'purple' }}/>
      </div>
    );
  }

}

export default App;
