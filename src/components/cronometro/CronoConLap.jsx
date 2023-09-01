import React, { useReducer } from 'react'
import { Button } from 'react-native'

export default function CronoConLap ({ reloj, lapState, setLapState }) {
  let dispatch

  function reducer (lap, action) {
    console.log('lap reducer inicio ' + reloj)
    if (action.type === 'TAKELAP') {
      console.log('lap reducer ' + reloj)
      lap.push(reloj)
      console.log('lap reducer lap ' + lap)
      console.log('lap reducer lapState ' + lapState)
      return lap
    }
  }
  [lapState, dispatch] = useReducer(reducer, lapState) //Opcion Reducer

  const handleLap = (lapState) => {
    console.log('handleLap 1 ' + lapState)
    //setLapState([...lapState, [reloj]]) //Opcion useState
    //lapState.push(reloj) //Opcion push
    dispatch({ type: 'TAKELAP' }) //Opcion Reducer
    console.log(`handleLap 2 ${lapState}`)
  }

  return (
    <Button title='Lap' onPress={() => handleLap(lapState)} />
  )
}
