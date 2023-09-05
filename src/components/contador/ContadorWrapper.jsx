import React, { useState } from 'react'
import { Incrementar } from './Incrementar'
import { Decrementar } from './Decrementar'
import { Resetear } from './Resetear'
import { Text } from 'react-native'

export function ContadorWrapper () {
  const [contador, setContador] = useState(0)

  const handleContador = (e) => {
    setContador(e)
    console.log('Valor en wrapper->', e)
  }

  const props = {
    value: contador,
    onChange: handleContador
  }
  return (
    <>
      <Text>
        Clicks: {contador}
      </Text>
      <Incrementar value={contador} onChange={(x) => handleContador(x)} />
      <Decrementar value={contador} onChange={handleContador} />
      <Resetear {...props} />
    </>
  )
}
