import React from 'react'
import { Button, Text } from 'react-native'
import ContadorValue from './ContadorValue'

export function Incrementar ({ value, onChange }) {
  const incrementar = () => {
    onChange(++value)
    console.log('Incremento -> ', value)
  }
  return (
    <>
      <ContadorValue value={value} />
      <Button title='Incrementar' onPress={() => incrementar()} />
    </>
  )
}
