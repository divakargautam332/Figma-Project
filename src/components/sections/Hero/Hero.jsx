import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>

            {/* Decorative Background Glows */}
            <div className={styles.glowPink}></div>
            <div className={styles.glowPurple}></div>

            <div className={styles.heroContainer}>

                {/* Hero Section */}
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        Beautiful Landing Page <br /> Design for You
                    </h1>
                    <p className={styles.subtitle}>
                        A good design is not only aesthetically pleasing, but also <br />
                        functional. It should be able to solve the problem
                    </p>
                    <button className={styles.ctaButton}>
                        Download Template
                    </button>
                </header>

                {/* Dashboard Card */}
                <div className={styles.dashboardContainer}>
                    <div className={styles.dashboardGlass}>

                        {/* Sidebar */}
                        <div className={styles.sidebar}>
                            <div className={styles.sidebarLogo}></div>

                            {[...Array(5)].map((_, i) => (
                                <div key={i} className={styles.sidebarLine}></div>
                            ))}

                            <div className={styles.userProfile}></div>
                        </div>

                        {/* Main Content */}
                        <div className={styles.mainContent}>

                            <div className={styles.topRow}>

                                {/* Circle Chart Card */}
                                <div className={styles.card}>
                                    <div className={styles.circleChart}>
                                        <div className={styles.innerCircle}></div>
                                    </div>
                                </div>

                                {/* User List Card */}
                                <div className={styles.card}>
                                    <div className={styles.userList}>
                                        {[1, 2, 3, 4].map((u) => (
                                            <div key={u} className={styles.userRow}>
                                                <div className={styles.avatar}></div>
                                                <div className={styles.textLine}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <div className={styles.bottomRow}>

                                {/* Bar Chart Card */}
                                <div className={styles.card}>
                                    <div className={styles.barContainer}>
                                        {[40, 70, 50, 90, 60].map((h, i) => (
                                            <div
                                                key={i}
                                                className={styles.bar}
                                                style={{ height: `${h}%` }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Empty Card */}
                                <div className={styles.card}></div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
