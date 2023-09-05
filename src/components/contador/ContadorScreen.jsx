import React from 'react'
import { ContadorWrapper } from './ContadorWrapper'
import { Button, View } from 'react-native'

export default function ContadorScreen ({ navigation }) {
  return (
    <View>
      <ContadorWrapper />
      <Button title='Ir a Nombre' onPress={() => navigation.navigate('Nombre')} />
    </View>
  )
}
