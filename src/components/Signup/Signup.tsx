import React, { useState } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import styled from 'styled-components'
import Age from './Age'
import Email from './Email'
import Name from './Name'

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
   &:hover {
      background: #f0f0f0;
      cursor: pointer;
   }
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
   h1 {
      font-weight: 400;
   }
`

type Props = {
   handleSignup: () => void
}

const Signup: React.FC<Props> = ({ handleSignup }) => {
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
         <Name page={page} handleForward={handleForward} handleBackward={handleBackward} />
         <Email page={page} handleForward={handleForward} handleBackward={handleBackward} />
         <Age
            page={page}
            handleBackward={handleBackward}
            handleForward={handleForward}
            handleSignup={handleSignup}
         />
      </Container>
   )
}

export default Signup
