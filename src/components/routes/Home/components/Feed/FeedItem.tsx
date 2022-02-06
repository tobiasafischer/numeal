import React from 'react'
import styled from 'styled-components'

const SpacingContainer = styled.div`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: row;
   height: auto;
   width: 100%;
   border-color: #dddddd;
   border-bottom-width: 1px;
   padding-bottom: 15px;
   padding-top: 15px;
`
const Container = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: row;
   height: 85px;
   width: 100%;
   border-color: #dddddd;
   border-width: 1px;
   border-radius: 4px;
   position: relative;
`
const TitleContainer = styled.div`
   height: 100%;
   width: 20%;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   padding: 5px;
   flex-direction: column;
   margin-left: 30px;
`
const NutritionContainer = styled.div`
   padding: 10px;
   height: 100%;
   width: 40%;
   margin-left: 20px;
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   flex-direction: column;
`

const H2 = styled.h2`
   color: #333;
   font-size: 20px;
   font-weight: 500;
   padding-bottom: 5px;
`
const H3 = styled.h3`
   color: #8d8d8d;
   font-size: 10px;
   font-weight: 400;
`
const P = styled.p`
   color: #333;
   font-size: 10px;
   font-weight: 400;
`

const PreviewImage = styled.img`
   border-top-left-radius: 4px;
   border-bottom-left-radius: 4px;
   border-color: #dddddd;
   border-width: 1px;
   width: 100px;
   height: 84px;
`

const FeedItem: React.FC = () => {
   return (
      <SpacingContainer>
         <Container>
            <PreviewImage
               alt="pizza"
               src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/03/10/0/FNK_BEST-CHICKEN-AND-RICE-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1583851621211.jpeg"
            />
            <TitleContainer>
               <H2>title</H2>
               <H3>subtitle</H3>
            </TitleContainer>
            <NutritionContainer>
               <P>4 servings</P>
               <P>Cal: 1037/serving</P>
               <P>Fat: 7g</P>
               <P>Protein: 30g</P>
               <P>Carbs: 120g</P>
            </NutritionContainer>
         </Container>
      </SpacingContainer>
   )
}

export default FeedItem
