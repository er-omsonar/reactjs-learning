import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Ecard from './components/Ecard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 className='bg-green-400 p-4 text-black rounded-2xl mb-1'>Tailwind Test</h1>
     <Card heading="This is my first card component" btnText="vist me"/>
     <Card btnText="visit me "/> */}

     <Ecard imgurl="https://flowbite.com/docs/images/products/apple-watch.png" name="Apple watch series 7" price="$300"/>
     <Ecard imgurl="https://www.shutterstock.com/image-photo/white-sneaker-sport-shoe-on-260nw-2155395817.jpg" name="White sports shoes" price="$20"/>
     <Ecard imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnl0048wABb2SDln_OMbifRuY9wa-ohFogQ&s" name="black laptop bag" price="$25"/>

      </>
  )
}

export default App
