import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
   width: 100%;
   height: auto;
   padding-bottom: 10px;
`
const Header = styled.div`
   width: 100%;
   height: auto;
   padding: 20px 20px 10px 0px;
   font-size: 16px;
   color: #333;
   font-weight: 300;
   margin: 0;
`

const Body = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: flex-start;
   flex-direction: row;
`
const TrendingCards: React.FC<{ title: string }> = ({ title, children }) => {
   return (
      <Container>
         <Header>{title}</Header>
         <Body>{children}</Body>
      </Container>
   )
}

export default TrendingCards
