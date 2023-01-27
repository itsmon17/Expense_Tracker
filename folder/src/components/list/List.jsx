import styles from "./List.module.css"

const List = ({ nameInp, ageInp }) => {
  return (
    <div className={styles.listBlock}>
            <p className={styles.title}>{nameInp}({ageInp} years old)</p>
    </div>
  )
}

export default List
