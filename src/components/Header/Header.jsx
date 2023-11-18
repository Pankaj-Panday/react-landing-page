import React from "react";
import styles from "./header.module.css";

export default function Header() {
	console.log(styles);
	return (
		<header>
			<nav className={`flex ${styles.navbar}`}>
				<a className={`left`}>
					<img src="/images/Logo.png" alt="Brand-Logo" />
				</a>
				<ul className={`flex ${styles.navList}`}>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Service</a>
					</li>
					<li>
						<a href="#">Feature</a>
					</li>
					<li>
						<a href="#">Product</a>
					</li>
					<li>
						<a href="#">Testimonial</a>
					</li>
					<li>
						<a href="#">FAQ</a>
					</li>
				</ul>
				<button className={`right btn-sm ${styles.loginBtn}`}>Login</button>
				<button className={`btn btn-sm ${styles.signUpBtn}`}>Sign up</button>
			</nav>
		</header>
	);
}
