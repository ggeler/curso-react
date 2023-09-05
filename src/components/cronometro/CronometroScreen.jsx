import React from 'react'
import { Button, View } from 'react-native'
import CronoWrapper from './CronoWrapper'

export default function CronometroScreen ({ navigation }) {
  return (
    <View>
      <CronoWrapper />
      <Button title='Ir a Nombre' onPress={() => navigation.navigate('Nombre')} />
    </View>
  )
}