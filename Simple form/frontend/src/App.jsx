import React from 'react'
import HomePage from './pages/HomePage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Showforms from './pages/Showforms'

function App() {
  return (
    <div className=' bg-slate-800 text-white p-6 w-full h-full'>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/forms' element={<Showforms />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App