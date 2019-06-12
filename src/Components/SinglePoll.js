import React, { Component } from 'react';
import Poll from 'react-polls';
import { Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap';

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
      <h2 class="bigQ"> { this.props.poll.question } </h2>
        <div className="argTwo">
          <Card style={{ width: '30rem' }}>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{ this.props.poll.bp1 }</ListGroupItem>
              <ListGroupItem>{ this.props.poll.bp2 }</ListGroupItem>
              <ListGroupItem>{ this.props.poll.bp3 }</ListGroupItem>
            </ListGroup>
          </Card>
          <Card style={{ width: '30rem' }}>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{ this.props.poll.bp4 }</ListGroupItem>
              <ListGroupItem>{ this.props.poll.bp5 }</ListGroupItem>
              <ListGroupItem>{ this.props.poll.bp6 }</ListGroupItem>
            </ListGroup>
          </Card>
          </div>
        <div className="vote">
          <Poll
            question={null}
            answers={this.state.pollAnswers}
            onVote={this.handleVote}
            noStorage={true}
            customStyles={{ theme: 'white', questionBold: true }}
            />
        </div>
        <div className="closeDel">
        {this.props.poll.open === 't' ?
          <Button className="closePoll"variant="primary" onClick={() => { this.props.handleCheck(this.props.poll, this.props.arrayIndex, this.props.currentArray)}}>CLOSE POLL</Button> :
          <h4> THIS POLL IS CLOSED </h4>
        }
          <Button className="deletePoll" variant="secondary" onClick={() => {this.props.handleDelete(this.props.poll.id, this.props.arrayIndex, this.props.currentArray)}}> DELETE POLL </Button>
          </div>
      </div>
    )
  }
}

export default SinglePoll;
