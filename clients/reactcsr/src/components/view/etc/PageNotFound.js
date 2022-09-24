import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound(props){ 
    const navigate = useNavigate(); 
    const toRender = 
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <p>PageNotFound</p>
      </header>
    </div>
    </React.Fragment>;
    
    return(
    <React.Fragment> 
    {toRender}
    </React.Fragment>);
}
export default PageNotFound;