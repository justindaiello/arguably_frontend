import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Poll from 'react-polls';
import Form from './Components/Form.js'


class App extends Component {

//   // binding methods
//   this.handleChange = this.handleChange.bind(this)
//   this.handleSubmit = this.handleSubmit.bind(this)
// }

  render() {
    return (
      <div className="arguably-container">
        <Form />
      </div>
    );
  }

}

export default App;
