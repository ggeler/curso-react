import React, { useEffect } from 'react'
import { Button, Text } from 'react-native'

const Temporizador = () => {
  const [tempo, setTempo] = React.useState(0);
  const [iniciado, setIniciado] = React.useState(false);

  const iniciar = () => {
    setIniciado(true)
  }

  useEffect(() => {
    if (iniciado) {
      const intervalo = setInterval(() => {
        setTempo(tempo => tempo - 1)
      }, 1000)
      return () => clearInterval(intervalo)
    }
  }, [tempo, iniciado])

  setTempo(600)

  return (
    <>
      <Button title='Iniciar' onPress={iniciar} />
      <Text>{tempo}</Text>
    </>
  )
}

export default Temporizador
