import React from "react";
import Globe from "../../../assets/logos/Globe.svg";
import styles from './Contact.module.css';

function Contact() {
    return (
        <div>
            <section className={styles.contact}>
                <div className={styles.imageWrapper}>
                    <img src={Globe} alt="Globe" />
                </div>

                <div className={styles.formSection}>
                    <h1>Get In Touch</h1>

                    <p>
                        A good design is not only aesthetically pleasing,
                        but also functional. It should be able to solve the problem.
                    </p>

                    <form className={styles.form}>
                        <input type="email" placeholder="Your Email" />
                        <input type="text" placeholder="Your Name" />
                        <button type="submit">Get in Touch</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
