import React from 'react'
import styled from 'styled-components/native'
import TrendingCards from './components/Trending/TrendingCards'
import Featured from './components/Featured/Featured'

const Container = styled.View`
   width: 100%;
   height: 100%;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
`

const ContentContainer = styled.View`
   width: 100%;
   height: 100%;

   box-sizing: border-box;
   padding: 20px 20px;
`

const Home: React.FC = () => {
   return (
      <Container>
         <Featured />
         <ContentContainer>
            <TrendingCards />
         </ContentContainer>
      </Container>
   )
}

export default Home
