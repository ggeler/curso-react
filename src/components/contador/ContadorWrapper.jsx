import React, { useState } from 'react'
import { Incrementar } from './Incrementar'
import { Decrementar } from './Decrementar'
import { Resetear } from './Resetear'

export function ContadorWrapper () {
  const [contador, setContador] = useState(0)

  const handleContador = (e) => {
    setContador(e)
    console.log('Valor en wrapper->', e)
  }
  return (
    <>
      <Incrementar value={contador} onChange={(x) => handleContador(x)} />
      <Decrementar value={contador} onChange={handleContador} />
      <Resetear value={contador} onChange={handleContador} />
    </>
  )
}
