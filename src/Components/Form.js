import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer1: '',
      answer2: '',
      bp1: '',
      bp2: '',
      bp3: '',
      bp4: '',
      bp5: '',
      bp6: '',
      open: 't'
    }
  }

  // handle input change
  handleChange = (e) => {
    this.setState( { [e.target.id]: e.target.value } )
  }

  // handle submit of form
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleCreatePoll(this.state);
    this.setState({
      question: '',
      answer1: '',
      answer2: '',
      bp1: '',
      bp2: '',
      bp3: '',
      bp4: '',
      bp5: '',
      bp6: '',
      open: 't'
    })
  }


  render() {
    return (
      <div className="arguably-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='prompt'>Prompt</label>
            <textarea type="text" value={this.state.question} onChange={this.handleChange} id="question"></textarea>
          <label htmlFor='Your Answer'>Your Answer</label>
            <input type="text" value={this.state.answer1} onChange={this.handleChange} id="answer1"/>
          <label htmlFor='Their Answer'>Their Answer</label>
            <input type="text" value={this.state.answer2} onChange={this.handleChange} id="answer2"/>
          <div className="argOne">
            <label htmlFor='argOneFirst'>First Point</label>
              <input type="text" value={this.state.bp1} onChange={this.handleChange} id="bp1"/>
            <label htmlFor='argOneSecond'>Second Point</label>
              <input type="text" value={this.state.bp2} onChange={this.handleChange} id="bp2"/>
            <label htmlFor='argOneThird'>Third Point</label>
              <input type="text" value={this.state.bp3} onChange={this.handleChange} id="bp3"/>
          </div>
          <div className="argTwo">
            <label htmlFor='argTwoFirst'>First Point</label>
              <input type="text" value={this.state.bp4} onChange={this.handleChange} id="bp4"/>
            <label htmlFor='argTwoSecond'>Second Point</label>
              <input type="text" value={this.state.bp5} onChange={this.handleChange} id="bp5"/>
            <label htmlFor='argTwoThird'>Third Point</label>
              <input type="text" value={this.state.bp6} onChange={this.handleChange} id="bp6"/>
          </div>
          <input className="submit" type="submit" value="Create Debate" />
        </form>
      </div>
    );
  }

}

export default Form;
