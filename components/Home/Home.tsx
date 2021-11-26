import React from 'react'
import styled from 'styled-components/native'
import TrendingCards from './components/Trending/TrendingCards'

const ContentContainer = styled.View`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
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
