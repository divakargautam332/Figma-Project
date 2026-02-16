import React from "react";
import Random from "../../../assets/logos/Group-128.svg";
import styles from "./FooterUp.module.css";
import Navbar from "../Navbar/Navbar";

function FooterUp() {
    return (
        <footer className={styles.footer}>

            {/* Left Side */}
            <div className={styles.left}>
                <img src={Random} className={styles.logo} alt="Company Logo" />
                <p className={styles.para}>
                    A good design is not only aesthetically pleasing,
                    but also functional. It should be able to solve the problem.
                </p>
            </div>

            {/* Right Side */}
            <div className={styles.rightWrapper}>

                <div className={styles.column}>
                    <h4>Sections</h4>
                    <p>Home</p>
                    <p>Section One</p>
                    <p>Section Two</p>
                    <p>Section Three</p>
                </div>

                <div className={styles.column}>
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Pricing</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>

                <div className={styles.column}>
                    <h4>Support</h4>
                    <p>Docs</p>
                    <p>Support</p>
                    <p>FAQ</p>
                    <p>Community</p>
                </div>

            </div>
        </footer>
    );
}

export default FooterUp;
