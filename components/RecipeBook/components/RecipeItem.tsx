import React from 'react'
import styled from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'

const RecipeBookContainer = styled.TouchableOpacity`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: row;
   height: 150px;
   width: 100%;
   border-bottom-color: #ddd;
   border-bottom-width: 1px;
   padding: 15px 20px;
`

const Image = styled.Image`
   width: 40%;
   height: 100%;
`

const Title = styled.Text`
   font-size: 24px;
   color: #333;
`

const Subtitle = styled.Text`
   font-size: 16px;
   color: #b5b5b5;
`

const TitleContainer = styled.View`
   height: 100%;
   width: auto;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
   margin-left: 35px;
   margin-right: 100px;
`

const RecipeItem: React.FC = () => {
   return (
      <RecipeBookContainer>
         <Image
            alt="pizza"
            source={{
               uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/03/10/0/FNK_BEST-CHICKEN-AND-RICE-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1583851621211.jpeg',
            }}
         />
         <TitleContainer>
            <Title>title</Title>
            <Subtitle>subtitle</Subtitle>
         </TitleContainer>
         <MaterialIcons name="chevron-right" size="24px" color="#717171" />
      </RecipeBookContainer>
   )
}

export default RecipeItem
