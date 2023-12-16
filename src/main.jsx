import React from 'react'
import {createRoot} from 'react-dom/client'
import './Index.css'
///
import Index from './components/Index';
import AS2 from './components/Ass2';
const root=document.getElementById('root')
createRoot(root).render(
  <div>
    <div>
     <Index/>
     {/* <AS2/> */}
    </div>
  </div>
);