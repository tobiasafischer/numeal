import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   border-radius: 4px;
   background-color: white;
   width: 200px;
   height: 100px;
   z-index: 9;
   position: relative;
   margin-right: 20px;
   border-radius: 4px;
`

const PreviewImage = styled.img`
   width: 200px;
   border-radius: 4px;
   height: 100px;
`

const Overlay = styled.div`
   border-radius: 4px;
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 30px;
   display: flex;
   justify-content: flex-start;
   padding: 5px 10px;
   align-items: center;
   background: #333;
   width: 100%;
   opacity: 0.5;
`

const TextContainer = styled.div`
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

const H2 = styled.h2`
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
            src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/03/10/0/FNK_BEST-CHICKEN-AND-RICE-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1583851621211.jpeg"
         />
      </Container>
   )
}

export default TrendingCard
