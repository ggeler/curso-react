import React from 'react'
import { Button } from 'react-native'
import ContadorValue from './ContadorValue'

function incrementar (value, onChange) {
  onChange(++value)
  console.log('Incremento -> ', value)
}

export function Incrementar ({ value = 0, onChange }) {
  return (
    <>
      <ContadorValue value={value} />
      <Button title='Incrementar' onPress={() => incrementar(value, onChange)} />
    </>
  )
}
