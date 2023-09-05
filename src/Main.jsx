import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { ContadorWrapper } from './components/contador/ContadorWrapper'
import { Nombre } from './components/nombre/Nombre'
import CronoWrapper from './components/cronometro/CronoWrapper'
import Constants from 'expo-constants'

/*
<Nombre />
      <CronoWrapper />
*/
const Main = () => {
  return (
    <>
      <StatusBar style='#fff' animated barStyle='light-content' />
      <View style={styles.container}>
        <CronoWrapper />
        <ContadorWrapper />
      </View>
    </>
  )
}
export default Main

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
    // backgroundColor: 'red',
    padding: 20
  }
})
