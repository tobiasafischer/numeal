/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'
import { SearchTerm } from '.'

const Container = styled.div`
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
      'lol',
      'haha',
      'lol',
      'haha',
      'lol',
      'haha',
      'lol',
      'haha',
      'lol',
      'haha',
      'lol',
      'haha',
      'lol',
      'haha',
      'lol',
      'haha',
      'lol',
      'haha',
   ]
   return (
      <Container>
         {items.map((item, idx) => (
            <SearchTerm key={`${item}-${idx}`}>{item}</SearchTerm>
         ))}
      </Container>
   )
}

export default RecentlySearched
