import React, { useReducer } from 'react'
import { Button } from 'react-native'

export default function CronoConLap ({ reloj, lapState, setLapState }) {
  let dispatch

  function reducer (lap, action) {
    console.log(`lap reducer inicio ${reloj}`)
    if (action.type === 'TAKELAP') {
      console.log('lap reducer ' + reloj)
      lap.push(reloj)
      setLapState([...lapState, reloj])
      return lap
    }
  }

  [lapState, dispatch] = useReducer(reducer, [])

  const handleLap = () => {
    dispatch({ type: 'TAKELAP' })
  }
  return (
    <Button title='Lap' onPress={handleLap} />
  )
}
