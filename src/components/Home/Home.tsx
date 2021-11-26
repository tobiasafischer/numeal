import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import TrendingCards from './components/TrendingCards'

const ContentContainer = styled(animated.div)`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: start;
   box-sizing: border-box;
   padding: 20px 20px;
`

const Home: React.FC = () => {
   return (
      <ContentContainer>
         <TrendingCards />
      </ContentContainer>
   )
}

export default Home
