import React, { Component } from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


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
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="prompt">
          {/* <label htmlFor='prompt'>Prompt</label> */}
            <textarea type="text" placeholder="Write your debate here"value={this.state.question} onChange={this.handleChange} id="question"></textarea>
          </div>
          <h1 className="thisThat">This or That</h1>
          <div className="argOne">
            <Card className="cardClass" style={{ width: '16rem' }}>
              <ListGroup className="list-group-flush">
                <ListGroupItem><label htmlFor='argOneFirst'>First Point</label>
                  <input type="text" value={this.state.bp1} onChange={this.handleChange} id="bp1"/></ListGroupItem>
                <ListGroupItem><label htmlFor='argOneSecond'>Second Point</label>
                  <input type="text" value={this.state.bp2} onChange={this.handleChange} id="bp2"/></ListGroupItem>
                <ListGroupItem><label htmlFor='argOneThird'>Third Point</label>
                  <input type="text" value={this.state.bp3} onChange={this.handleChange} id="bp3"/></ListGroupItem>
                <ListGroupItem><label htmlFor='Your Answer'>Answer One</label>
                  <input type="text" value={this.state.answer1} onChange={this.handleChange} id="answer1"/></ListGroupItem>
              </ListGroup>
            </Card>
            <Card className="addCard" style={{ width: '16rem' }}>
              <ListGroup className="list-group-flush">
                <ListGroupItem><label htmlFor='argTwoFirst'>First Point</label>
                  <input type="text" value={this.state.bp4} onChange={this.handleChange} id="bp4"/></ListGroupItem>
                <ListGroupItem><label htmlFor='argTwoSecond'>Second Point</label>
                  <input type="text" value={this.state.bp5} onChange={this.handleChange} id="bp5"/></ListGroupItem>
                <ListGroupItem><label htmlFor='argTwoThird'>Third Point</label>
                  <input type="text" value={this.state.bp6} onChange={this.handleChange} id="bp6"/></ListGroupItem>
                <ListGroupItem><label htmlFor='Their Answer'> Answer Two</label>
                  <input type="text" value={this.state.answer2} onChange={this.handleChange} id="answer2"/></ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="createButton">
            <Button className="submit" type="submit" value="Create Debate" >Create Debate</Button>
          </div>
        </form>
      </div>
    );
  }

}

export default Form;
