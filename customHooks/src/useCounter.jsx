import { useState } from "react";

export default function useCounter (defaultVal){
   const [value,setValue] = useState(defaultVal)
   
   function toogle(val){
    if(val != Boolean){
      setValue(!value)
    }
   }

    return[value,toogle]
}
