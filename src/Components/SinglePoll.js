import React, { Component } from 'react';
import Poll from 'react-polls';
import Button from 'react-bootstrap/Button';

class SinglePoll extends Component {

  constructor(props) {
    super(props)
      this.state = {
        pollAnswers: [
          { option: props.poll.answer1, votes: 10 },
          { option: props.poll.answer2, votes: 5 }
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
      <h1> { this.props.poll.question } </h1>
      <ul>
        <li>{ this.props.poll.bp1 }</li>
        <li>{ this.props.poll.bp2 }</li>
        <li>{ this.props.poll.bp3 }</li>
      </ul>
      <ul>
        <li>{ this.props.poll.bp4 }</li>
        <li>{ this.props.poll.bp5 }</li>
        <li>{ this.props.poll.bp6 }</li>
      </ul>
      {this.props.poll.open === 't' ?
        <Button variant="primary" onClick={() => { this.props.handleCheck(this.props.poll, this.props.arrayIndex, this.props.currentArray)}}>CLOSE POLL</Button> :
        <h4> THIS POLL IS CLOSED </h4>
      }
      <Button variant="secondary" onClick={() => {this.props.handleDelete(this.props.poll.id, this.props.arrayIndex, this.props.currentArray)}}> DELETE </Button>
      <div className="pollPoll">
      <Poll
        question={null}
        answers={this.state.pollAnswers}
        onVote={this.handleVote}
        noStorage={true} />
      </div>
      </div>
    )
  }
}

export default SinglePoll;
