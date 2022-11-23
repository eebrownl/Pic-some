import React from 'react'
import Header from './components/Header'
import Photos from './pages/Photos'
import Cart from './pages/Cart'
import {Link, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path='/' element={<Photos />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
