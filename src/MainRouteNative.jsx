import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Nombre } from './components/nombre/Nombre'
import Constants from 'expo-constants'
import { Link, NativeRouter, Redirect, Route, Routes, Switch } from 'react-router-native'
import { ContadorWrapper } from './components/contador/ContadorWrapper'
import CronoWrapper from './components/cronometro/CronoWrapper'

const MainRouteNative = () => {
  return (
    <NativeRouter>
      <View>
        <Link to='/'><Nombre /></Link>
        <Link to='/contador'><ContadorWrapper /></Link>
        <Link to='/cronometro'><CronoWrapper /></Link>
      </View>
      <Route path='/' Component={Nombre} exact />
      <Route path='/contador' Component={ContadorWrapper} />
      <Route path='/cronometro' Component={CronoWrapper} />
      <Redirect to='/' />
    </NativeRouter>

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
