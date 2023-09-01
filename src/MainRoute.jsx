import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { Nombre } from './components/nombre/Nombre'
import { ContadorWrapper } from './components/contador/ContadorWrapper'
import Constants from 'expo-constants'
/*
const Stack = createNativeStackNavigator()

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Nombre name' component={NombreScreen} options={{ title: 'Nombre Titulo' }} />
        <Stack.Screen name='Contador' component={ContadorWrapper} options={{ title: 'Contador' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainRoute

const NombreScreen = (navigation) => {
  return (
    <>
      <Nombre />
      <Button title='Ir a Contador' onPress={() => navigation.navigate('Contador')} />
    </>
  )
}

const ContadorWrapperScreen = (navigation) => {
  return (
    <Button title='Ir a Contador' onPress={() => navigation.navigate('ContadorWrapper')} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',/
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: 'red',
    padding: 20
  }
})
*/
