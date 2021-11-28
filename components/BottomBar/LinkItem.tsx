import React from 'react'
import styled from 'styled-components'

const Container = styled.View`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 50px;
   width: 50px;
`

const LinkItem: React.FC = ({ children }) => {
   return <Container>{children}</Container>
}

export default LinkItem
