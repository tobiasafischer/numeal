/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react'
import styled from 'styled-components'
import { TrendingCard, TrendingCards } from '../../shared'
import { RecentlySearched } from './components'

const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   position: relative;
`

const Body = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   position: relative;
   padding: 15px 20px;
`

const Button = styled.div`
   width: 100%;
   height: 275px;
   border-radius: 10px;
   border-color: #ddd;
   border-width: 1px;
   shadow-color: #353535;
   shadow-opacity: 0.5;
   shadow-offset: 1px;
   shadow-radius: 3px;
`

const img = styled.img`
   border-top-left-radius: 4px;
   border-bottom-left-radius: 4px;
   border-color: #dddddd;
   border-width: 1px;
   width: 100%;
   height: 100%;
`

const Row = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   align-items: flex-start;
   width: 100%;
   height: auto;
`

const Search: React.FC = () => {
   const [search, setSearch] = useState('')
   const handleSearch = (query) => setSearch(query)
   return (
      <Container>
         <Searchbar
            placeholder="Search"
            onChangeText={handleSearch}
            value={search}
            style={{
               borderColor: '#ddd',
               borderWidth: '1px',
               borderBottomLeftRadius: '15%',
               borderBottomRightRadius: '15%',
            }}
         />
         <Body>
            <RecentlySearched />
            <Row>
               <TrendingCards title="your top recipes">
                  <TrendingCard />
                  <TrendingCard />
                  <TrendingCard />
                  <TrendingCard />
               </TrendingCards>
            </Row>
            <Row>
               <TrendingCards title="your top categories">
                  <TrendingCard />
                  <TrendingCard />
                  <TrendingCard />
                  <TrendingCard />
               </TrendingCards>
            </Row>
         </Body>
      </Container>
   )
}

export default Search
