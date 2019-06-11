import React from 'react';

const Header = (props) => {

  return(
    <header className="header">
      <h1 className="appName">ARGUABLY.US</h1>
      <h4 className="slogan">Crowdsource your subjective debates</h4>

      {props.pollView === 't' ?
        <button
          onClick={() => props.handleView('f')}>
            Show Closed Polls
        </button> :
        <button
          onClick={() => props.handleView('t')}>
            Show Open Polls
        </button>
      }
    </header>
  )
}

export default Header;
