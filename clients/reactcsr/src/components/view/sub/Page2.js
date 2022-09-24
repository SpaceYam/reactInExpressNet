import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Page2(props){ 
    const navigate = useNavigate(); 
    const toRender = 
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <p>Page2</p>
      </header>
    </div>
    </React.Fragment>;
    
    return(
    <React.Fragment> 
    {toRender}
    </React.Fragment>);
}
export default Page2;