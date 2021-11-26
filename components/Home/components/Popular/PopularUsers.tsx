import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
   width: 100%;
   height: 50px;
   display: flex;
   flex-direction: column;
`
const Header = styled.View``
const Body = styled.View`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: flex-start;
`

const PopularUsers: React.FC = () => {
   return (
      <Container>
         <Header>a</Header>
         <Body>z</Body>
      </Container>
   )
}

export default PopularUsers
