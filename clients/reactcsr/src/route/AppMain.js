import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PageNotFound } from '../components/view/etc';
import { WelcomePage, Page1, Page2 } from '../components/view/sub';

function AppMain(props) {
  const location = useLocation(), pathName = location.pathname.split('/');
  let path = `${pathName[1]}`;
  if(pathName[2]!=undefined && pathName[2]!='') path = path+`/${pathName[2]}`;
  if(pathName[3]!=undefined && pathName[3]!='') path = path+`/${pathName[3]}`;

  let toRender = <></>;
  switch (path) {
    case '': 
      toRender = <WelcomePage /> 
      break;
    case 'home': 
      toRender = <Page1 />
      break;
    case 'home/page2': 
      toRender = <Page2 />
      break;
    default: 
      toRender = <PageNotFound />
      break;
  } 
  //if(user===null) toRender = <WelcomePage />
  return (<>
    {toRender}
  </>)
}
export default AppMain