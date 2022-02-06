/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import styled from 'styled-components'
import { BottomBar, Navbar } from './components'

const Container = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   position: relative;
`

const App: React.FC = () => (
   <Container className="App">
      <Navbar />
      <BottomBar />
   </Container>
)

export default App
