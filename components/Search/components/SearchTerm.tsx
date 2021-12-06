import React from 'react'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

const Container = styled.View`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   border-color: #ddd;
   border-bottom-width: 1px;
   border-radius: 4px;
   padding: 5px;
`

const Text = styled.Text`
   color: #333;
   font-size: 16px;
   font-weight: 300;
   margin-left: 20px;
`

const TextContainer = styled.TouchableOpacity`
   width: 90%;
   height: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
`

const IconButton = styled.TouchableOpacity`
   width: auto;
   height: auto;
   background-color: transparent;
   border-width: 0px;
   color: #333;
   z-index: 1;
`

const SearchTerm: React.FC = ({ children }) => {
   const handleSearch = () => alert('search ', children)
   const handleDelete = () => alert('delete ', children)
   return (
      <Container>
         <TextContainer onPress={handleSearch}>
            <MaterialIcons name="search" size="18px" color="#717171" />
            <Text>{children}</Text>
         </TextContainer>
         <IconButton onPress={handleDelete}>
            <MaterialIcons name="close" size="18px" color="#717171" />
         </IconButton>
      </Container>
   )
}

export default SearchTerm
