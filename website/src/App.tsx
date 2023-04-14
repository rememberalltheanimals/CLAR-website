import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
