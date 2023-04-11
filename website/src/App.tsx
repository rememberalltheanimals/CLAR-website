import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Index';
import Members from './pages/Members';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/members' element={<Members />} />
    </Routes>
    </BrowserRouter>
    // <main><nav></nav></main>
  )
}

export default App
