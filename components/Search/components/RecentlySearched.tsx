import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import SearchTerm from './SearchTerm'

const Container = styled.View`
   width: 100%;
   max-height: 275px;
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   border-color: #ddd;
   border-width: 0px;
   border-radius: 4px;
`

const RecentlySearched: React.FC = () => {
   const items = [
      'fart',
      'cum',
      'fart',
      'cum',
      'fart',
      'cum',
      'fart',
      'cum',
      'fart',
      'cum',
      'fart',
      'cum',
      'fart',
      'cum',
      'fart',
      'cum',
   ]
   return (
      <Container>
         <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
         >
            {items.map((item) => (
               <SearchTerm>{item}</SearchTerm>
            ))}
         </ScrollView>
      </Container>
   )
}

export default RecentlySearched
