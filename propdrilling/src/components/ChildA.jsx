import React from 'react'
import ChildB from './ChildB'
import styles from '../css/style.module.css'

function ChildA() {
  return (
    <>
  <ChildB/>
    <h1 className={styles.heading}>world hi hi </h1>
    
  </>
  )
}

export default ChildA