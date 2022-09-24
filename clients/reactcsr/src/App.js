import './App.css';

import React, { useRef, useState, useEffect } from "react";
import { //Link, useNavigate,
  BrowserRouter, Routes, Route, 
} from 'react-router-dom';

import { systemProps } from './components/common/Globals'; 
import { AppMain } from './route';
import { WelcomePage } from './components/view/sub';
import { PageNotFound } from './components/view/etc';

function App() { console.log(systemProps.systemName, 'running');
  return (<>
    {/*<div className="App">*/}
      <BrowserRouter>
        <Routes>
          <Route element={<WelcomePage />} path='/' />
          <Route element={<AppMain />} path='/home/*' />
          <Route element={<PageNotFound />} path='*' />
        </Routes>
      </BrowserRouter>
    {/*</div>*/}
  </>);
}

export default App;
