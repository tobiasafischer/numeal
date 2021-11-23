import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Container = styled.div``
const ContentContainer = styled(animated.div)`
   display: none;
   opacity: 0;
   width: 100%;
   height: 100%;
`

const WelcomeContainer = styled(animated.div)`
   display: flex;
   opacity: 1;
   width: 100%;
   height: 100%;
`

const Home: React.FC = () => {
   const contentStyle = useSpring({
      opacity: 1,
      display: 'flex',
   })
   const welcomeStyle = useSpring({
      opacity: 0,
      display: 'none',
   })
   return (
      <Container>
         <WelcomeContainer style={welcomeStyle}>
            <h2>welcome</h2>
         </WelcomeContainer>
         <ContentContainer style={contentStyle}>
            <h2>content</h2>
         </ContentContainer>
      </Container>
   )
}

export default Home
