import React from 'react'
import styled from 'styled-components/native'
import { Text, View, Image } from 'react-native'

const Container = styled.View`
   border-radius: 4px;
   background-color: white;
   width: 200px;
   height: 100px;
   z-index: 9;
   position: relative;
   margin-right: 10px;
   margin-left: 10px;
   border-radius: 4px;
   -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;

   &:first-child {
      margin-left: 0px;
   }
   &:last-child {
      margin-right: 0px;
   }
`

const PreviewImage = styled.Image`
   width: 200px;
   border-radius: 4px;
   height: 100px;
`

const Overlay = styled.View`
   border-radius: 4px;
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 30px;
   display: flex;
   justify-content: flex-start;
   box-sizing: border-box;
   padding: 5px 10px;
   align-items: center;
   background: #333;
   width: 100%;
   opacity: 0.5;
`

const TextContainer = styled.View`
   position: absolute;
   bottom: 0;
   left: 0;
   display: flex;
   justify-content: flex-start;
   flex-direction: row;
   align-items: center;
   height: 30px;
   width: 100%;
   z-index: 1;
`

const H2 = styled.Text`
   margin: 0px 3px 0px 10px;
   color: white;
   z-index: 1;
   font-size: 13px;
   font-weight: 600;
`

const TrendingCard: React.FC = () => {
   return (
      <Container>
         <TextContainer>
            <H2>pizza - author name</H2>
            <Overlay />
         </TextContainer>

         <PreviewImage
            alt="pizza"
            source={{
               uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/03/10/0/FNK_BEST-CHICKEN-AND-RICE-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1583851621211.jpeg',
            }}
         />
      </Container>
   )
}

export default TrendingCard
