import React, { Component } from 'react';
import Poll from 'react-polls';
import SinglePoll from './SinglePoll'


class PollList extends Component {


  render() {
    return(
      <div className="pollList">
        {this.props.view === "t" ?
        <div>
          { this.props.openPolls.map((poll, index) => {
              return (
                <SinglePoll
                  question={poll.question}
                  pollAnswers={poll.answers}
                  points1={poll.bulletPoints1}
                  points2={poll.bulletPoints2}
                  key={index}
                  poll={poll}/>
              )
          })}
        </div>:
          <h1>false</h1> }
      </div>
    )
  }

}

export default PollList;
