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

const Name: React.FC = ({ handleBackward, page, handleForward }) => {
   const [content, setContent] = useState('')

   const homeStyle = useSpring({
      opacity: page === 1 ? 1 : 0,
      display: page === 1 ? 'flex' : 'none',
   })

   const buttonStyle = useSpring({
      transform: page === 1 ? 'translateX(4px)' : 'translateX(-25px)',
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
            <h2>what should i call you?</h2>
            <InputContainer>
               <Input type="text" placeholder="your name here..." onChange={handleOnChange} />
               <Forwardbutton onClick={handleForward} style={forwardButtonStyle}>
                  <span className="material-icons">east</span>
               </Forwardbutton>
            </InputContainer>
            {content.length > 0 ? (
               <p>what a lovely name!</p>
            ) : (
               <p>while we are apart, lets cook together</p>
            )}
         </TextContainer>
      </HomeContainer>
   )
}

export default Name
