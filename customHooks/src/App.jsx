import { useState } from 'react'
import useCounter from './useCounter'
function App() {
 
  const [value,setValue] = useCounter(true)
  
  return (
    <>
   <button onClick={setValue}>toggle</button>
  

   {
     value ? <h1>hello</h1>:null
   }
    </>
  )
}

export default App
