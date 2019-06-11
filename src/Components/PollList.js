import React, { Component } from 'react';
import SinglePoll from './SinglePoll'


const PollList = (props) => {

    return(
      <div className="pollList">
        {props.view === "t" ?
        <div>
          { props.openPolls.map((poll, index) => {
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
                  arrayIndex={index}
                  poll={poll}
                  handleDelete={props.handleDelete}
                  handleCheck={props.handleCheck}
                  currentArray="openPolls"/>
              )
          })}
        </div> :
        <div>
          { props.closedPolls.map((poll, index) => {
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
                  arrayIndex={index}
                  poll={poll}
                  handleDelete={props.handleDelete}
                  handleCheck={props.handleCheck}
                  currentArray="closedPolls"/>
              )
          })}
        </div> }
      </div>
    )

}

export default PollList;
