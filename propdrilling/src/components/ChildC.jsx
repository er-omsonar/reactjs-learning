import React from 'react'
import { useContext } from 'react'
import { NameContext } from '../context/Context'
function ChildC() {
 const Nameinfo = useContext(NameContext)
  return (
    <div>Name is {Nameinfo.name}</div>
  )
}

export default ChildC