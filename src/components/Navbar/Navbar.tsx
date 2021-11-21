import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   height: 35px;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   background-color: white;
   border-bottom: 1px solid #c4c4c4;
   display: flex;
   align-items: center;
   z-index: 9999999;
   box-shadow: 0px 2px 10px rgb(0 0 0 / 5%);
`

const Logo = styled.div`
   color: #333333;
   position: absolute;
   left: 16px;
   font-weight: 450;
`

const Navbar: React.FC = () => (
   <Container>
      <Logo>numeal</Logo>
   </Container>
)

export default Navbar
