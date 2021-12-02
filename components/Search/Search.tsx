/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Searchbar } from 'react-native-paper'

const Container = styled.View`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   position: relative;
`

const Button = styled.View`
   margin-top: 20px;
   width: 90%;
   height: 300px;
   border-radius: 10px;
   border-color: #ddd;
   border-width: 1px;
   shadow-color: #353535;
   shadow-opacity: 0.5;
   shadow-offset: 1px;
   shadow-radius: 3px;
`

const Image = styled.Image`
   border-top-left-radius: 4px;
   border-bottom-left-radius: 4px;
   border-color: #dddddd;
   border-width: 1px;
   width: 100%;
   height: 100%;
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
         <Button title="">
            <Image
               alt="pizza"
               source={{
                  uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/03/10/0/FNK_BEST-CHICKEN-AND-RICE-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1583851621211.jpeg',
               }}
            />
         </Button>
      </Container>
   )
}

export default Search
