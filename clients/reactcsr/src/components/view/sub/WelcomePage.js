import logo from '../../../logo.svg';

import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage(props){ 
    const navigate = useNavigate(); 
    const toRender = 
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>WelcomePage</p>
        <a target="_blank" href="https://reactjs.org" className="App-link" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
    </React.Fragment>;
    
    return(
    <React.Fragment> 
    {toRender}
    </React.Fragment>);
}
export default WelcomePage;