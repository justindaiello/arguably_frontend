import React, { Component } from 'react';
import Poll from 'react-polls';

const pollQuestion = 'Is react-polls useful?'
const pollAnswers = [
  { option: 'Yes', votes: 0 },
  { option: 'No', votes: 0 }
]

class SinglePoll extends Component {

  state = {
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
    return(
      <Poll
        question={this.props.poll.question}
        answers={pollAnswers}
        onVote={this.handleVote}
        noStorage={true} />
    )
  }
}

export default SinglePoll;
