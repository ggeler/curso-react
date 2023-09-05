import React from 'react'
import { Nombre } from './Nombre'
import { Button, View } from 'react-native'

export default function NombreScreen ({ navigation }) {
  return (
    <View>
      <Nombre />
      <Button title='Ir a Contador' onPress={() => navigation.navigate('Contador')} />
      <Button title='Ir a Cronometro' onPress={() => navigation.navigate('Cronometro')} />
    </View>
  )
}
