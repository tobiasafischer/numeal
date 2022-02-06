import React from 'react'
import styled from 'styled-components'
import { FeedItem } from '.'

const Container = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
`
const Feed: React.FC = () => {
   return (
      <Container>
         <FeedItem />
         <FeedItem />
         <FeedItem />
         <FeedItem />
         <FeedItem />
      </Container>
   )
}

export default Feed
