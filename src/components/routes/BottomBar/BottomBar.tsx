import React from 'react'
import styled from 'styled-components'
import { Account, Home, RecipeBook, Search, ShoppingList } from '..'

const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   left: 0;
   position: absolute;
`

const tabBarActiveTintColor = '#333'

const Tab = createBottomTabNavigator()

const BottomBar: React.FC = () => {
   return <></>
}

export default BottomBar
