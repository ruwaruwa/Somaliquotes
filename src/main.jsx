import React from 'react'
import {createRoot} from 'react-dom/client'
import './Index.css'
///
import Index from './components/Index';
import AS2 from './components/Ass2';
import Menu from './components/Menu';
import F from './components/Footers';
import Foot from './components/Foot2';
import SomaliQuotes from './components/Somali';
const root=document.getElementById('root')
createRoot(root).render(
  <div>
    <div>
      {/* <Menu/> */}
      <F/>
      <SomaliQuotes/>
      <Foot/>
     {/* <Index/> */}
     {/* <AS2/> */}
    </div>
  </div>
);