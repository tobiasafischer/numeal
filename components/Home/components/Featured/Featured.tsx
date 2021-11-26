import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
   width: 100%;
   height: 40%;
   position: relative;
   top: 0;
   left: 0;
   -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;
`
const Bottom = styled.View`
   position: absolute;
   height: 50px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const BigImage = styled.Image`
   height: 100%;
   width: 100%;
`

const Featured: React.FC = () => {
   return (
      <Container>
         <BigImage
            alt="header"
            source={{
               uri: 'https://www.foodnetwork.com/content/dam/images/food/video/8/81/810/8100/8100455.jpg',
            }}
         />
         <Bottom></Bottom>
      </Container>
   )
}

export default Featured
