import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector } from './redux/hooks'

function App() {
  const count = useAppSelector(state => state.counter)

  return (
    <>
    <h1>count is {count}</h1>
    </>
  )
}

export default App
