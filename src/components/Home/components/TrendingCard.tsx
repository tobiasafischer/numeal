import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   border-radius: 4px;
   box-shadow: 0 4px 9px 0 rgb(0 0 0 / 10%);
   width: 200px;
   height: 100px;
   position: relative;
   overflow: cover;
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

   img {
      object-fit: cover;
      width: 200px;
      border-radius: 4px;
      height: 100px;
   }
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
   box-sizing: border-box;
   padding: 5px 10px;
   align-items: center;
   background: #333;
   width: 100%;
   opacity: 0.4;
`

const TextContainer = styled.div`
   position: absolute;
   bottom: 0;
   left: 0;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   height: 30px;
   width: auto;
   z-index: 1;
   h2 {
      margin: 0px 3px 0px 10px;
      color: white;
      font-size: 14px;
   }
   p {
      color: white;
      font-size: 12px;
   }
`

const TrendingCard: React.FC = () => {
   return (
      <Container>
         <TextContainer>
            <h2>pizza </h2>
            <p>{' - author name'}</p>
         </TextContainer>

         <Overlay />
         <img
            alt="pizza"
            src="https://www.simplyrecipes.com/thmb/qu-AslBeskzh_HG9H0dQAmcrdLQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg"
         />
      </Container>
   )
}

export default TrendingCard
