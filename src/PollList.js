import React, { Component } from 'react';
import Poll from 'react-polls';

const pollQuestion = 'Is react-polls useful?'
const pollAnswers = [
  { option: 'Yes', votes: 8 },
  { option: 'No', votes: 2 }
]

class PollList extends Component {

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
    return(
      <div className="pollList">
        <Poll
          question={pollQuestion}
          answers={pollAnswers}
          onVote={this.handleVote}
          noStorage={true}/>
      </div>
    )
  }

}

export default PollList;
