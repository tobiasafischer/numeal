import React from 'react'
import styled from 'styled-components/native'
import TrendingCard from './TrendingCard'

const Container = styled.View`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
   width: 100%;
   height: auto;
   padding-bottom: 10px;
`
const Header = styled.View`
   width: 100%;
   height: auto;
   box-sizing: border-box;
   padding: 20px 20px 10px 0px;
   h2 {
      font-size: 20px;
      color: #333;
      font-weight: 400;
      margin: 0;
   }
`
const Body = styled.View`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: flex-start;
   overflow-x: scroll;
   -ms-overflow-style: none; /* IE and Edge */
   scrollbar-height: none; /* Firefox */
   &::-webkit-scrollbar {
      display: none;
   }
`
const TrendingCards: React.FC = () => {
   return (
      <Container>
         <Header>
            <h2>trending recipes</h2>
         </Header>
         <Body>
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
         </Body>
      </Container>
   )
}

export default TrendingCards
