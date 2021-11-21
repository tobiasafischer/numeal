import React, { useState, useEffect } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import styled from 'styled-components'
import Name from './Name/Name'

const Container = styled(animated.div)`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`
const Button = styled.div`
   height: 40px;
   width: 200px;
   border: 1px solid #333333;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const TextContainer = styled(animated.div)`
   width: 100%;
   height: 25%;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;
   margin-bottom: 25%;
   position: absolute;
   transition: all 0.015s ease-in-out;
`

const Home: React.FC = () => {
   const [page, setPage] = useState(0)

   const handleForward = () => setPage((prev) => prev + 1)

   const handleBackward = () => {
      if (page !== 0) setPage((prev) => prev - 1)
   }

   const textStyle = useSpring({
      opacity: page === 0 ? 1 : 0,
      transform: page === 0 ? 'translateX(0%)' : 'translateX(-100%)',
   })

   return (
      <Container>
         <TextContainer style={textStyle}>
            <h2>numeal</h2>
            <Button onClick={handleForward}>start cooking</Button>
            <p>while we are apart, lets cook together</p>
         </TextContainer>
         <Name page={page} handleFoward={handleForward} handleBackward={handleBackward} />
      </Container>
   )
}

export default Home
