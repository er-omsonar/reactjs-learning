import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
//   toggle text
//  let [text,setText] =  useState('hello world')
//  function toggle(){
//    if(text === ''){
//     setText('hello world')
//    }
//    else{
//     setText('')
//    }
//  }

   //toggle like button
   let [like,setLike] = useState(false)
   let [count,setCount] = useState(0)
   function likes(){
    if(like===false){
      setCount(count+1)
      setLike(true)
    }
    else{
      setCount(count-1)
      setLike(false)
    }
   }
  return (
    <>
    {/*Toggle text*/}

    {/* <h1>{text}</h1>
    <br />
    <button onClick={toggle}>Toogle</button> */}

   {/*Toggle like button */}

   <button onClick={likes}>Like</button>
   <h3>Like count is :{count}</h3>
    </>
  )
}

export default App
