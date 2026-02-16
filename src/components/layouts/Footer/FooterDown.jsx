import React from "react";
import linkedIn from "../../../assets/logos/Group-208.svg";
import Twitter from "../../../assets/logos/Group-209.svg";
import Copilate from "../../../assets/logos/Group-211.svg";
import styles from "./FooterDown.module.css";

function FooterDown() {
    return (
        <div className={styles.footerDown}>

            <p className={styles.text}>
                © 2022 All Rights Reserved – Inkyy.com
            </p>

            <div className={styles.social}>
                <img src={linkedIn} className={styles.icon} alt="LinkedIn" />
                <img src={Twitter} className={styles.icon} alt="Twitter" />
                <img src={Copilate} className={styles.icon} alt="Copilate" />
            </div>

        </div>
    );
}

export default FooterDown;
