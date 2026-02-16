import React from "react";
import styles from "./Features.module.css";
import Navbar from "../../layouts/Navbar/Navbar";

import Group from "../../../assets/icons/Group.svg";
import Group1 from "../../../assets/icons/Group-102.svg";
import Group2 from "../../../assets/icons/Group-103.svg";
import Group3 from "../../../assets/icons/Group-104.svg";
import Group4 from "../../../assets/icons/Group-105.svg";
import Group5 from "../../../assets/icons/Group-106.svg";

const featureData = [
    { icon: Group, title: "Fully Customizable" },
    { icon: Group1, title: "Fast Performance" },
    { icon: Group2, title: "Secure Platform" },
    { icon: Group3, title: "Cloud Storage" },
    { icon: Group4, title: "24/7 Support" },
    { icon: Group5, title: "Easy Integration" },
];

function Features() {
    return (
        <section className={styles.features}>

            <div className={styles.header}>
                <h1>Feature Boxes</h1>
                <p>
                    A good design is not only aesthetically pleasing,
                    but also functional. It should be able to solve the problem.
                </p>
            </div>

            <div className={styles.grid}>
                {featureData.map((item, index) => (
                    <div className={styles.card} key={index}>
                        <img src={item.icon} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>
                            A good design is not only aesthetically pleasing,
                            but also functional.
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Features;
