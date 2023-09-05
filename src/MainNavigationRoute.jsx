import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator} from '@react-navigation/drawer'

import React from 'react'
import NombreScreen from './components/nombre/NombreScreen'
import ContadorScreen from './components/contador/ContadorScreen'
import CronometroScreen from './components/cronometro/CronometroScreen'

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const MainNavigationRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Nombre' component={NombreScreen} />
        <Stack.Screen name='Contador' component={ContadorScreen} />
        <Stack.Screen name='Cronometro' component={CronometroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const MainTabNavigationRoute = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Nombre' component={NombreScreen} />
        <Tabs.Screen name='Contador' component={ContadorScreen} />
        <Tabs.Screen name='Cronometro' component={CronometroScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

const MainDrawerNavigationRoute = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Nombre'>
        <Drawer.Screen name='Nombre' component={NombreScreen} />
        <Drawer.Screen name='Contador' component={ContadorScreen} />
        <Drawer.Screen name='Cronometro' component={CronometroScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default MainNavigationRoute
export { MainTabNavigationRoute, MainDrawerNavigationRoute }
