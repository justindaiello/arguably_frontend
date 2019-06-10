import React, { Component } from 'react';



class Form extends Component {
  constructor () {
    super()
    this.state = {
      prompt: '',
      subject: '',
      argOneFirst: '',
      argOneSecond: '',
      argOneThird: '',
      argTwoFirst: '',
      argTwoSecond: '',
      argTwoThird: ''
    }
    // binding methods
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handle input change
handleChange(e) {
  this.setState( { [e.target.id]: e.target.value } )
}

// handle submit of form
handleSubmit(e) {
  // prevents default behavior of submitting a form
  e.preventDefault()
  // creating the new song object based off user input
  const newSong = {
    prompt: this.state.prompt,
    subject: this.state.subject,
    argOneFirst: this.state.argOneFirst,
    argOneSecond: this.state.argOneSecond,
    argOneThird: this.state.argOneThird,
    argTwoFirst: this.state.argTwoFirst,
    argTwoSecond: this.state.argTwoSecond,
    argTwoThird: this.state.argTwoThird
  }

}

  clearForm = () => {
     this.setState({ task_item: ''})
   }

  render() {
    return (
      <div className="arguably-container">
        <header className="header">
          <h1>ARGUABLY.US</h1>
          <h4>Crowdsource your subjective debates</h4>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='prompt'>Prompt</label>
            <input type="text" value={this.state.prompt} onChange={this.handleChange} id="prompt"/>
          <label htmlFor='subject'>Subject</label>
            <input type="text" value={this.state.subject} onChange={this.handleChange} id="subject"/>
          <div className="argOne">
            <label htmlFor='argOneFirst'>First Point</label>
              <input type="text" value={this.state.argOneFirst} onChange={this.handleChange} id="argOneFirst"/>
            <label htmlFor='argOneSecond'>Second Point</label>
              <input type="text" value={this.state.argOneSecond} onChange={this.handleChange} id="argOneSecond"/>
            <label htmlFor='argOneThird'>Third Point</label>
              <input type="text" value={this.state.argOneThird} onChange={this.handleChange} id="argOneThird"/>
          </div>
          <div className="argTwo">
            <label htmlFor='argTwoFirst'>First Point</label>
              <input type="text" value={this.state.argTwoFirst} onChange={this.handleChange} id="argTwoFirst"/>
            <label htmlFor='argTwoSecond'>Second Point</label>
              <input type="text" value={this.state.argTwoSecond} onChange={this.handleChange} id="argTwoSecond"/>
            <label htmlFor='argTwoThird'>Third Point</label>
              <input type="text" value={this.state.argTwoThird} onChange={this.handleChange} id="argTwoThird"/>
          </div>
          <input className="submit" type='submit' value='Create Debate' />
        </form>
      </div>
    );
  }

}

export default Form;
