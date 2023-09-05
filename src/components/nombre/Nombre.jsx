import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native'

function Nombre () {
  const [nombre, setNombre] = useState('')

  const presionoButton = () => {
    console.log('Presionado boton desde la constante')
    console.log(nombre)
  }

  const actualizoNombre = (texto) => {
    setNombre(texto)
    console.log(texto)
  }

  return (
    <>
      <Text>Hola Mundo!!</Text>
      <TextInput
        placeholder='Ingrese su nombre'
        onChangeText={actualizoNombre}
      />
      <Button color='green' title='Soy un boton' onPress={presionoButton} />
    </>
  )
}

export { Nombre }
