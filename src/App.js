import React, { Component } from 'react';
import './App.css';
import Poll from 'react-polls';


const pollQuestion = 'Is react-polls useful?'
const pollAnswers = [
  { option: 'Yes', votes: 8 },
  { option: 'No', votes: 2 }
]

class App extends Component {

  state = {
    view: true,
    openPolls: [],
    closedPolls: [],
    pollAnswers: [...pollAnswers]
  }

  handleVote = voteAnswer => {
  const { pollAnswers } = this.state
  const newPollAnswers = pollAnswers.map(answer => {
    if (answer.option === voteAnswer) answer.votes++
    return answer
  })
  this.setState({
    pollAnswers: newPollAnswers
  })
}

  render() {
    return (
      <div className="App">
        <div>
          <Poll
            question={pollQuestion}
            answers={pollAnswers}
            onVote={this.handleVote}
            noStorage={true}/>
        </div>
      </div>
    );
  }

}

export default App;
