import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Page1(props){ 
    const navigate = useNavigate(); 
    const toRender = 
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <p>Page1</p>
      </header>
    </div>
    </React.Fragment>;
    
    return(
    <React.Fragment> 
    {toRender}
    </React.Fragment>);
}
export default Page1;