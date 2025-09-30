import { useState } from "react"


function App() {
  const [color,setColor] = useState("pink")
  return (
    <>
      <div className="w-full h-screen duration-500" style={{
        backgroundColor: color
      }}>
        
        <div  className="absolute bottom-5 left-1/2 transform -translate-x-1/2 max-w-2xl w-full bg-white h-[60px] rounded-2xl flex flex-wrap justify-center">
        <button  onClick={() => setColor("red")}  className="bg-red-600 rounded-2xl h-10 w-20 align-middle m-auto">Red</button>

         <button  onClick={() => setColor("blue")}  className="bg-blue-600 rounded-2xl h-10 w-20 align-middle m-auto">Blue</button>

          <button  onClick={() => setColor("green")}  className="bg-green-600 rounded-2xl h-10 w-20 align-middle m-auto">green</button>
        </div>
      </div>
    </>
  )
}

export default App
