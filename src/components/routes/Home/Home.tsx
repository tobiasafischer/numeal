import React from 'react'
import styled from 'styled-components'
import { TrendingCard, TrendingCards } from '../../shared'
import { Featured, Feed } from './components'

const Container = styled.div`
   width: 100%;
   height: auto;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
`

const ContentContainer = styled.div`
   width: 100%;
   height: 100%;
   padding: 20px 20px;
`

const Home: React.FC = () => {
   return (
      <Container>
         <Featured />
         <ContentContainer>
            <TrendingCards title="trending recipes">
               <TrendingCard />
               <TrendingCard />
               <TrendingCard />
               <TrendingCard />
               <TrendingCard />
            </TrendingCards>
            <Feed />
         </ContentContainer>
      </Container>
   )
}

export default Home
