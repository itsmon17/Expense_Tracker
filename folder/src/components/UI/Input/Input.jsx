import styles from "./Input.module.css"
const Input = ({label,type, onChange}) => {
    return (
      <div className={styles.inputBlock}>
          <label className={styles.label}>{label}</label>
          <input 
          className={styles.inp}
          type={type}
          onChange={onChange}/>
      </div>
    )
  }
  
  export default Input