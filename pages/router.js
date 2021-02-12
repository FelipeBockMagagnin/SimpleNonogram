import React from 'react'

import Home from './Home'
import Game from './Game'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function Router(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' options={{ headerShown: false }} component={Home} />
        <Stack.Screen name='Game' options={{ headerShown: false }} component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}