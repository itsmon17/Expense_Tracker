import React from 'react'
import styles from "./Btn.module.css"

const Btn = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClick} disabled={props.disabled} >Add User</button>
  )
}

export default Btn