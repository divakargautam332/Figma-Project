import React from "react";
import styles from "./Hero.module.css";
// import dashboardImg from "../../assets/dashboard.png"; // apni image lagana

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>
                    Beautiful Landing Page <br /> Design for You
                </h1>
                <p>
                    A good design is not only aesthetically pleasing,
                    but also functional.
                </p>

                {/* <img src={dashboardImg} alt="dashboard" /> */}
            </div>
        </section>
    );
}

export default Hero;
