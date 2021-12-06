import React from 'react'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

const Container = styled.View`
   height: 35px;
   position: relative;
   top: 43px;
   left: 0;
   width: 100%;
   display: flex;
   margin-bottom: 50px;
   align-items: center;
   z-index: 9999999;
`

const Logo = styled.Text`
   color: #333333;

   font-weight: 300;
   font-size: 24px;
`

const Icon = styled.TouchableOpacity`
   display: flex;
   align-items: center;
   flex-direction: row;
   position: absolute;
   height: 100%;
   width: auto;
   right: 10px;
`

const TextContainer = styled.TouchableOpacity`
   display: flex;
   align-items: center;
   flex-direction: row;
   position: absolute;
   height: 100%;
   width: auto;
   left: 20px;
`

const Navbar: React.FC = () => (
   <Container>
      <TextContainer>
         <Logo>numeal</Logo>
      </TextContainer>
      <Icon>
         <MaterialIcons name="add" size="24px" color="#333" />
      </Icon>
   </Container>
)

export default Navbar
