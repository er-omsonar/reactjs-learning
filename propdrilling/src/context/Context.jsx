import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const NameContext = createContext(null)

export const NameProvider = (props) =>{
  const [name,setName] = useState('om')
  return(
   <NameContext.Provider value={{name,setName}}>
    {props.children}
   </NameContext.Provider>
  )
}