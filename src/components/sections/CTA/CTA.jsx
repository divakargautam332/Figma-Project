import React from 'react'
import styles from './CTA.module.css';
import Stat from '../../../assets/logos/Stats.svg';
function CTA() {
    return (
        <div className={styles.stats}>
            <div className={styles.inner}>
                <p>Love our Our Tool?</p>
                <h1>Fell Free to Join our <br /> 15 Days Free Trial</h1>
                <button className={styles.btn}>Download Template</button>
            </div>
            <div>
                <img src={Stat} className={styles.img} alt="" />
            </div>
        </div>
    )
}

export default CTA