import React from 'react'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

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
   margin-bottom: -20px;
`
const BigImage = styled.Image`
   height: 100%;
   width: 100%;
`
const Bottom = styled.View`
   position: absolute;
   bottom: 0;
   height: 60px;
   width: 100%;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: row;
`
const H2 = styled.Text`
   font-size: 30px;
   color: white;
   font-weight: 500;
   margin-left: 10px;
`
const P = styled.Text`
   font-size: 20px;
   margin-top: 3px;
   margin-left: 3px;
   color: white;
   font-weight: 400;
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
         <Bottom>
            <LinearGradient
               style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
               }}
               colors={['rgba(0, 0, 0, 0) 85%', 'rgba(0, 0, 0, 0.6) 0']}
            >
               <H2>title -</H2>
               <P> author name</P>
            </LinearGradient>
         </Bottom>
      </Container>
   )
}

export default Featured
