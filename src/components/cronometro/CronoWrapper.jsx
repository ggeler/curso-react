import React, { useEffect, useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import CronoConLap from './CronoConLap'

function CronoWrapper () {
  const [reloj, setReloj] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
// const lapMemo = useMemo(() => [], []) // [lap[]
  const [lapState, setLapState] = useState([])

  useEffect(() => {
    console.log(`reloj ${reloj}`)
    if (isStarted && !isPaused) {
      const intervalo = setInterval(() => {
        setReloj(reloj => reloj + 1)
      }, 100)
      return () => clearInterval(intervalo)
    }
  }, [isStarted, isPaused, reloj])

  const handleStart = () => {
    setIsStarted(true)
    setIsPaused(false)
  }

  const handlePause = () => {
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    setIsPaused(false)
    setIsStarted(false)
    setReloj(0)
    setLapState([])
  }

  const handleResume = () => {
    setIsPaused(false)
    setIsStarted(true)
  }

  function renderTime (time) {
    return (
      <Text>
        {('0' + Math.floor((time / 600) % 60)).slice(-2)}:
        {('0' + Math.floor((time / 10) % 60)).slice(-2)}.
        {('0' + ((time / 10) % 100)).slice(-1)}
      </Text>
    )
  }

  function renderList (list) {
    return (
      <FlatList
        data={list}
        renderItem={({ item }) => {
          const id = lapState.findIndex(index => index === item)
          return (
            <>
              <Text>Lap {id} -{'>'} {renderTime(item)}</Text>
            </>
          )
        }}
      />
    )
  }

  return (
    <View>
      {renderTime(reloj)}
      {(!isStarted && !isPaused) ? <Button title='Iniciar' onPress={handleStart} /> : null}
      {(isStarted && !isPaused) ? <Button title='PAusar' onPress={handlePause} /> : null}
      {(isStarted) ? <Button title='Reiniciar' onPress={handleReset} /> : null}
      {(isPaused) ? <Button title='Resumir' onPress={handleResume} /> : null}
      {(isStarted && !isPaused) ? <CronoConLap reloj={reloj} lapState={lapState} setLapState={setLapState} /> : null}
      {renderList(lapState)}
    </View>
  )
}

export default CronoWrapper
