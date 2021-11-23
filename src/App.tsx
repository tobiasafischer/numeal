import React, { useState, useEffect } from 'react'
import Signup from './components/Signup'
import './App.css'
import Navbar from './components/Navbar'
import { useSpring } from 'react-spring'
import Home from './components/Home/Home'

const App: React.FC = () => {
   const [show, setShow] = useState(false)
   const [finishSignup, setFinishSignup] = useState(false)
   const handleClick = () => setShow(!show)
   const handleSignup = () => {
      setFinishSignup(true)
   }

   const style = useSpring({
      opacity: finishSignup ? 1 : 0,
      display: finishSignup ? 'flex' : 'none',
   })

   const signupStyle = useSpring({
      opacity: finishSignup ? 0 : 1,
      display: finishSignup ? 'none' : 'flex',
   })

   useEffect(() => console.log(finishSignup), [finishSignup])

   return (
      <div className="App">
         <Navbar show={show} handleClick={handleClick} />
         <Signup style={signupStyle} handleSignup={handleSignup} />
         <Home style={style} />
      </div>
   )
}
export default App
