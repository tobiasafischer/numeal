import React, { useState, useEffect } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import styled from 'styled-components'
import { Input } from './Form'
import { TextContainer } from './Signup'

const HomeContainer = styled(animated.div)`
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   transition: all 0.075s ease-in-out;
`

const Backbutton = styled(animated.button)`
   border: none;
   background-color: transparent;
   width: auto;
   height: auto;
   position: absolute;
   top: 45px;
   left: 0;
   color: #333333;
   &:hover {
      cursor: pointer;
   }
`

const Forwardbutton = styled(animated.button)`
   border: none;
   background-color: transparent;
   width: auto;
   height: auto;
   color: #333333;
   &:hover {
      cursor: pointer;
   }
`

const InputContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: row;
   width: 100%;
`

type Props = {
   handleBackward: () => void
   handleForward: () => void
   page: number
}

const Email: React.FC<Props> = ({ handleBackward, page, handleForward }) => {
   const [content, setContent] = useState('')

   const homeStyle = useSpring({
      opacity: page === 2 ? 1 : 0,
      display: page === 2 ? 'flex' : 'none',
   })

   const buttonStyle = useSpring({
      transform: page === 2 ? 'translateX(4px)' : 'translateX(-25px)',
   })
   const forwardButtonStyle = useSpring({
      transform: content.length > 0 ? 'translateX(10px)' : 'translateX(5px)',
   })

   const handleOnChange = (e) => setContent(e.target.value)

   return (
      <HomeContainer style={homeStyle}>
         <Backbutton onClick={handleBackward} style={buttonStyle}>
            <span className="material-icons">west</span>
         </Backbutton>
         <TextContainer>
            <h2>thanks! and your email?</h2>
            <InputContainer>
               <Input type="text" placeholder="me@myemail.com" onChange={handleOnChange} />
               <Forwardbutton onClick={handleForward} style={forwardButtonStyle}>
                  <span className="material-icons">east</span>
               </Forwardbutton>
            </InputContainer>
            <p>be sure to drink plenty of water</p>
         </TextContainer>
      </HomeContainer>
   )
}

export default Email
