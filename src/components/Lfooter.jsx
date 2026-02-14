import React from 'react'
import styles from './Lfooter.module.css';


function Lfooter() {
  return (
       <div className={styles.box}>
        <div className={styles.container}>
            <h3 className={styles.text1}>Love our Tool?</h3>
            <h1 className={styles.text2}>Feel Free to Join our 15 Days Free Trial</h1>
            <button className={styles.button1}>Download Template</button>
         
        </div><div className={styles.image1}>
         <img src="../src/assets/print-Photoroom.png" alt="settings" />
    
    </div></div>

  )
}

export default Lfooter
