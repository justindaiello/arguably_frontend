import React, { Component } from 'react';
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
                  answer1={poll.answer1}
                  answer2={poll.answer2}
                  bp1={poll.bp1}
                  bp2={poll.bp2}
                  bp3={poll.bp3}
                  bp4={poll.bp4}
                  bp5={poll.bp5}
                  bp6={poll.bp6}
                  key={index}
                  poll={poll}/>
              )
          })}
        </div>:
        <div>
          { this.props.openPolls.map((poll, index) => {
              return (
                <SinglePoll
                  question={poll.question}
                  answer1={poll.answer1}
                  answer2={poll.answer2}
                  bp1={poll.bp1}
                  bp2={poll.bp2}
                  bp3={poll.bp3}
                  bp4={poll.bp4}
                  bp5={poll.bp5}
                  bp6={poll.bp6}
                  key={index}
                  poll={poll}/>
              )
          })}
        </div> }
      </div>
    )
  }

}

export default PollList;
