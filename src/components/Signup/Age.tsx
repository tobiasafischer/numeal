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
   height: 50px;
   input {
      text-align: center;
      width: 50px;
      height: 50px;
   }
`

type Props = {
   handleBackward: () => void
   handleForward: () => void
   page: number
   handleSignup: () => void
}

const Age: React.FC<Props> = ({ handleBackward, handleForward, page, handleSignup }) => {
   const [content, setContent] = useState('')

   const handleClick = () => {
      handleForward()
      handleSignup()
   }

   const homeStyle = useSpring({
      opacity: page === 3 ? 1 : 0,
      display: page === 3 ? 'flex' : 'none',
   })

   const buttonStyle = useSpring({
      transform: page === 3 ? 'translateX(4px)' : 'translateX(-25px)',
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
            <h2>how young are you?</h2>
            <InputContainer>
               <Input type="number" placeholder="21" onChange={handleOnChange} />
               <Forwardbutton onClick={handleClick} style={forwardButtonStyle}>
                  <span className="material-icons">east</span>
               </Forwardbutton>
            </InputContainer>
            <p>{'you are perfect <3'}</p>
         </TextContainer>
      </HomeContainer>
   )
}

export default Age
