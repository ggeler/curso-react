import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ContadorWrapper } from './components/contador/ContadorWrapper'
import { Nombre } from './components/nombre/Nombre'
import CronoWrapper from './components/cronometro/CronoWrapper'
import Constants from 'expo-constants'

const Main = () => {
  return (
    <View style={styles.container}>
      <ContadorWrapper />
      <Nombre />
      <CronoWrapper />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    /*
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',/
    */
    marginTop: Constants.statusBarHeight,
    flex: Constants.flexibility,
    backgroundColor: 'red',
    padding: 20
  }
})

export default Main
