import React from 'react'
import List from '../list/List'
import styles from "./NewList.module.css"


const NewList = ({ list }) => {
  return (
    <ul className={styles.ul}>
        {list.map((el) => {
        return( 
           <List
           nameInp={el.nameInp}
           ageInp={el.ageInp}/>
           )
        })}
    </ul>
   
   
  )
}

export default NewList