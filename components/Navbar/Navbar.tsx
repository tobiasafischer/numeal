import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const Container = styled.View`
   height: 35px;
   position: static;
   top: 45px;
   left: 0;
   width: 100%;
   display: flex;
   align-items: center;
   z-index: 9999999;
`

const Logo = styled.Text`
   color: #333333;
   position: absolute;
   left: 20px;
   font-weight: 300;
   font-size: 24px;
`

const Navbar: React.FC = () => (
   <Container>
      <Logo>numeal</Logo>
   </Container>
)

export default Navbar
