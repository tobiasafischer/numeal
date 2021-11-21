import React, { useState } from 'react'
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar'

const App: React.FC = () => {
   const [show, setShow] = useState(false)

   const handleClick = () => setShow(!show)

   return (
      <div className="App">
         <Navbar show={show} handleClick={handleClick} />
         <Home />
      </div>
   )
}
export default App
