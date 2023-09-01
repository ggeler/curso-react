import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Nombre } from './components/nombre/Nombre'
import Constants from 'expo-constants'
import { Link, NativeRouter, Redirect, Route, Routes, Switch } from 'react-router-native'
import { ContadorWrapper } from './components/contador/ContadorWrapper'
import CronoWrapper from './components/cronometro/CronoWrapper'

const MainRouteNative = () => {
  return (
    <>
      <View>
        <Link to='/'><Button title='Nombre' /></Link>
      </View>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<Nombre />} exact><Text>Nombre</Text></Route>
          <Route path='/contador' Component={<ContadorWrapper />} exact><Text>Contador</Text> </Route>
          <Route path='/cronometro' Component={<CronoWrapper />} exact><Text>Cronometro</Text> </Route>
          <Redirect to='/' />
        </Routes>
      </NativeRouter>
    </>
  )
}

export default MainRouteNative
const styles = StyleSheet.create({
  container: {
    /*
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',/
    */
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: 'red',
    padding: 20
  }
})
