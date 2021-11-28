import React from 'react'
import styled from 'styled-components'
import FeedItem from './FeedItem'

const Container = styled.View`
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
   margin-top: 10px;
`
const Feed: React.FC = () => {
   return (
      <Container>
         <FeedItem />
         <FeedItem />
         <FeedItem />
      </Container>
   )
}

export default Feed
