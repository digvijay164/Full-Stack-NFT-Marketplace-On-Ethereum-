import React from 'react'
import styles from "./Button.module.css"

const Button = ({ btnText, handleComponent }) => {
  return (
    <div className={styles.box}>
      <button
        className={styles.button}
        onClick={() => { handleComponent() }}
      >{btnText}</button>
    </div>
  )
}

export default Button
