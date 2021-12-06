import React from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

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
   padding: 20px 20px 10px 0px;
`

const H2 = styled.Text`
   font-size: 16px;
   color: #333;
   font-weight: 300;
   margin: 0;
`

const Body = styled.View`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: flex-start;
   flex-direction: row;
`
const TrendingCards: React.FC<{ title: string }> = ({ title, children }) => {
   return (
      <Container>
         <Header>
            <H2>{title}</H2>
         </Header>
         <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
         >
            <Body>{children}</Body>
         </ScrollView>
      </Container>
   )
}

export default TrendingCards
