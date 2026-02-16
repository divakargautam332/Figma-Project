import React from "react";
import styles from "./Company.module.css";
import Frame from "../../../assets/logos/Frame.svg";
import Frame1 from "../../../assets/logos/Frame1.svg";
import Frame2 from "../../../assets/logos/Frame2.svg";
import Frame3 from "../../../assets/logos/Frame3.svg";
import Frame4 from "../../../assets/logos/Frame4.svg";
import Frame5 from "../../../assets/logos/Frame5.svg";

function Company() {
    return (
        <section className={styles.company}>
            <h2 className={styles.heading}>
                Companies we’ve worked with <br />
                <span>Since 2015</span>
            </h2>

            <div className={styles.logoGrid}>
                <div className={styles.logoBox}><img src={Frame} alt="Company" /></div>
                <div className={styles.logoBox}><img src={Frame1} alt="Company" /></div>
                <div className={styles.logoBox}><img src={Frame2} alt="Company" /></div>
                <div className={styles.logoBox}><img src={Frame3} alt="Company" /></div>
                <div className={styles.logoBox}><img src={Frame4} alt="Company" /></div>
                <div className={styles.logoBox}><img src={Frame5} alt="Company" /></div>
            </div>
        </section>
    );
}

export default Company;
