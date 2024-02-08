import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Result from './pages/Result' // Fix: Changed import statement to match correct file casing

const App = () => {
  return (
    // <div><Home></Home></div>
    // Fix: Corrected component name casing
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App