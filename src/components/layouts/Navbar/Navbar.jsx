import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../../assets/logos/Group-128.svg";

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
                <h1>Squid</h1>
            </div>

            <ul className={styles.navLinks}>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/features")}>Features</li>
                <li onClick={() => navigate("/about")}>About</li>
                <li onClick={() => navigate("/contact")}>Contact</li>
            </ul>

            <div className={styles.buttons}>
                <button
                    className={styles.loginBtn}
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>

                <button
                    className={styles.signupBtn}
                    onClick={() => navigate("/signup")}
                >
                    Sign Up
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
