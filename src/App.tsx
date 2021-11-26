import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Signup from './components/Signup'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'

const Container = styled(animated.div)`
   height: 100%;
   margin-top: 35px;
   width: 100%;
   display: flex;
`

const App: React.FC = () => {
   const [show, setShow] = useState(false)
   const [finishSignup, setFinishSignup] = useState(true)
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
         <Navbar />
         <Container style={signupStyle}>
            <Signup handleSignup={handleSignup} />
         </Container>
         <Container style={style}>
            <Home />
         </Container>
      </div>
   )
}
export default App
