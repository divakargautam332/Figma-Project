import React from 'react';
import styles from './Guide.module.css';

const Guide = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contentGrid}>

                <div className={styles.visualSide}>
                    <div className={styles.orbitContainer}>

                        <div className={`${styles.ring} ${styles.ring1}`} />
                        <div className={`${styles.ring} ${styles.ring2}`} />
                        <div className={`${styles.ring} ${styles.ring3}`} />

                        <div className={styles.centerLogo}>∞</div>

                        <div className={`${styles.planet} ${styles.orange}`}>*</div>
                        <div className={`${styles.planet} ${styles.yellow}`}>🐵</div>
                        <div className={`${styles.planet} ${styles.blue}`}>W</div>

                    </div>
                </div>

                <div className={styles.textSide}>
                    <h1>We're here to guide and help you at all times</h1>
                    <p>
                        A good design is not only aesthetically pleasing, but also functional.
                    </p>
                    <button className={styles.downloadBtn}>Download</button>
                </div>

            </div>
        </section>
    );
};

export default Guide;
