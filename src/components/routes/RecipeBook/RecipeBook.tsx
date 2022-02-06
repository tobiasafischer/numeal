import React from 'react'
import styled from 'styled-components'
import { RecipeItem } from './components'

const Container = styled.div`
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
         <RecipeItem />
         <RecipeItem />
         <RecipeItem />
         <RecipeItem />
         <RecipeItem />
         <RecipeItem />
         <RecipeItem />
         <RecipeItem />
      </Container>
   )
}

export default RecipeBook
