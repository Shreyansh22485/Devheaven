import React from 'react'
import Home from './pages/Home'
import Result from './pages/Result' // Fix: Changed import statement to match correct file casing

const App = () => {
  return (
    // <div><Home></Home></div>
    <div><Result></Result></div> // Fix: Corrected component name casing
  )
}

export default App