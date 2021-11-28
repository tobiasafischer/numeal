import React from 'react'
import styled from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import LinkItem from './LinkItem'
import Home from '../Home/Home'
import Search from '../Search/Search'
import RecipeBook from '../RecipeBook/RecipeBook'
import ShoppingList from '../ShoppingList/ShoppingList'
import Account from '../Account/Account'

const Container = styled.View`
   width: 100%;
   height: 100%;
   display: flex;
   left: 0;
   position: absolute;
`

const tabBarActiveTintColor = '#333'

const Tab = createBottomTabNavigator()

const BottomBar: React.FC = () => {
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            animationEnabled: true,
            removeClippedSubviews: true,
            headerShown: false,
            tabBarStyle: {
               shadowColor: '#868686',
               shadowOpacity: 0.2,
               shadowRadius: 7,
               backgroundColor: '#fff',
               height: 80,
               zIndex: 999,
            },

            tabBarItemStyle: {
               borderRightColor: '#f3f3f3',
               borderRightWidth: '1px',
               borderLeftColor: '#f3f3f3',
               borderLeftWidth: '1px',
               paddingTop: '3.25%',
               height: 'auto',
            },
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarLabel: '',
               tabBarActiveTintColor,
               tabBarIcon: ({ color, size, focused }) => (
                  <MaterialIcons name="home" size={size} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Search"
            component={Search}
            options={{
               tabBarLabel: '',
               tabBarActiveTintColor,
               tabBarIcon: ({ color, size, focused }) => (
                  <MaterialIcons name="search" size={size} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Recipe Book"
            component={RecipeBook}
            options={{
               tabBarLabel: '',
               tabBarActiveTintColor,
               tabBarIcon: ({ color, size, focused }) => (
                  <MaterialIcons name="restaurant-menu" size={size} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Shopping List"
            component={ShoppingList}
            options={{
               tabBarLabel: '',
               tabBarActiveTintColor,
               tabBarIcon: ({ color, size, focused }) => (
                  <MaterialIcons name="shopping-cart" size={size} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Account"
            component={Account}
            options={{
               tabBarLabel: '',
               tabBarActiveTintColor,
               tabBarIcon: ({ color, size, focused }) => (
                  <MaterialIcons name="person" size={size} color={color} />
               ),
            }}
         />
      </Tab.Navigator>
   )
}

export default BottomBar
