import React from 'react';
import { Route,Routes } from "react-router";
import LaunchPad from './Pages/LaunchPad';
import Launch from './Pages/Launch';

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<LaunchPad/>}/>
    <Route path='/launch/:launch_id' element={<Launch/>}/>
  </Routes>
  )
}

export default App