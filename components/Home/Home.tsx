import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import TrendingCards, { TrendingCard } from './components/Trending'
import Featured from './components/Featured/Featured'
import Feed from './components/Feed/Feed'

const Container = styled.View`
   width: 100%;
   height: auto;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
`

const ContentContainer = styled.View`
   width: 100%;
   height: 100%;
   padding: 20px 20px;
`

const Home: React.FC = () => {
   return (
      <ScrollView
         showsHorizontalScrollIndicator={false}
         showsVerticalHorizontalScrollIndicator={false}
         directionalLockEnabled={true}
      >
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
      </ScrollView>
   )
}

export default Home
