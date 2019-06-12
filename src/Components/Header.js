import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = (props) => {

  return(
    <header className="header">
      <h1 className="appName">ARGUABLY.US</h1>
      <h4 className="slogan">Crowdsource your subjective debates</h4>

      {props.pollView === 't' ?
        <Button
          className="pollBtn"
          onClick={() => props.handleView('f')}>
            Show Closed Polls
        </Button> :
        <button
          onClick={() => props.handleView('t')}>
            Show Open Polls
        </button>
      }
    </header>
  )
}

export default Header;
