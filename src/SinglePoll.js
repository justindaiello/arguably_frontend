import React, { Component } from 'react';
import Poll from 'react-polls';

// const pollQuestion = 'Is react-polls useful?'
// const pollAnswers = [
//   { option: 'Yes', votes: 0 },
//   { option: 'No', votes: 0 }
// ]

class SinglePoll extends Component {

  constructor(props) {
    super(props)
      this.state = {
      pollAnswers: [
        { option: props.poll.answer1, votes: 0 },
        { option: props.poll.answer2, votes: 0 }
        // { option: props.poll.answer3, votes: 0}
      ]
    }
  }

  handleVote = voteAnswer => {
    const pollAnswers  = this.state.pollAnswers
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
      <div>
      <h1> {this.props.poll.question} </h1>
      <h1> {this.props.poll.answer1} </h1>
      <Poll
        // question={this.props.poll.question} this will cause a console error, but the poll works
        answers={this.state.pollAnswers}
        onVote={this.handleVote}
        noStorage={true} />
      </div>
    )
  }
}

export default SinglePoll;
