import React from 'react'
import styled from 'styled-components'
import { ScrollView } from 'react-native'
import RecipeItem from './components/RecipeItem'

const Container = styled.View`
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   flex-direction: column;
   width: 100%;
   height: 100%;
`

const RecipeBook: React.FC = () => {
   return (
      <Container>
         <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
         >
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
         </ScrollView>
      </Container>
   )
}

export default RecipeBook
