import React from "react";
import styles from "./header.module.css";
import Button from "../Button/Button";

export default function Header() {
	return (
		<header className={`${styles.header}`}>
			<nav className={`flex ${styles.navbar}`}>
				<a className={`left`} href="#">
					<img src="/images/Logo.png" alt="Brand-Logo" />
				</a>
				<ul className={`flex ${styles.navList}`}>
					<li>
						<a href="#" className={`active ${styles.navLink}`}>
							Home
						</a>
					</li>
					<li>
						<a href="#" className={`${styles.navLink}`}>
							Service
						</a>
					</li>
					<li>
						<a href="#" className={`${styles.navLink}`}>
							Feature
						</a>
					</li>
					<li>
						<a href="#" className={`${styles.navLink}`}>
							Product
						</a>
					</li>
					<li>
						<a href="#" className={`${styles.navLink}`}>
							Testimonial
						</a>
					</li>
					<li>
						<a href="#" className={`${styles.navLink}`}>
							FAQ
						</a>
					</li>
				</ul>
				<Button
					style={{
						fontSize: "14px",
						minWidth: "93px",
						borderRadius: "6px",
						padding: "10px 20px",
						marginLeft: "auto",
					}}
					type="secondary"
					onClick={() => {}} // no functionality for button
				>
					Login
				</Button>
				<Button
					style={{
						fontSize: "14px",
						minWidth: "93px",
						borderRadius: "6px",
						padding: "10px 20px",
						marginLeft: "14px",
					}}
					type="primary"
					onClick={() => {}} // no functionality for button
				>
					Sign Up
				</Button>
			</nav>
		</header>
	);
}
