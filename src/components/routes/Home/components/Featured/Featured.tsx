import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   width: 100%;
   height: auto;
   position: relative;
   top: 0;
   left: 0;
   margin-bottom: -20px;
`
const BigImage = styled.img`
   height: 300px;
   width: 100%;
`
const Bottom = styled.div`
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
            src="https://www.foodnetwork.com/content/dam/images/food/video/8/81/810/8100/8100455.jpg"
         />
         <Bottom>
            <H2>title -</H2>
            <P> author name</P>
         </Bottom>
      </Container>
   )
}

export default Featured
