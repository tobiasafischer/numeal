/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import type { Node } from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import BottomBar from './components/BottomBar/BottomBar'

const Container = styled.View`
   height: 100%;
   width: 100%;
   display: flex;
   position: relative;
`

const App: () => Node = () => {
   return (
      <Container className="App">
         <Navbar />
         <NavigationContainer>
            <BottomBar />
         </NavigationContainer>
      </Container>
   )
}

export default App
