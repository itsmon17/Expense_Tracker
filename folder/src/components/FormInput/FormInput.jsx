import React, { useState } from 'react'
import Input from '../UI/Input/Input'
import Btn from '../UI/Btn/Btn'
import styles from "./FormInput.module.css"


const FormInput = (props) => {
    const [nameInp, setNameInput] = useState("")
    const [ageInp, setAgeInput] = useState("")

    

    const nameInputChangeHandler = (event) => {
        setNameInput(event.target.value)
    }
    const ageInputChangeHandler = (event) => {
        setAgeInput(event.target.value)
    }
    const addListHandler = (event) => {
        event.preventDefault()
            const newListData = {
                nameInp,
                ageInp,
            }
    
            props.onNewList(newListData)
            setAgeInput("")
            setNameInput("")
    }

  return (
    <div className={styles.formBlock}>
    <Input type="text" label="Username" onChange={nameInputChangeHandler} value={nameInp}/>
    <Input type="number" label="Age(Year)" onChange={ageInputChangeHandler} value={ageInp}/>
    <Btn  onClick={addListHandler} disabled={!ageInp || !nameInp} />
    </div>
    
  )
}

export default FormInput