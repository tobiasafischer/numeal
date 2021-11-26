/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import type { Node } from 'react'
import { useColorScheme, View } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import styled from 'styled-components/native'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'

const Container = styled.View`
   height: 100%;
   margin-top: 45px;
   width: 100%;
   display: flex;
`

const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark'

   const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   }
   return (
      <View className="App">
         <Navbar />
         <Container>
            <Home />
         </Container>
      </View>
   )
}

export default App
