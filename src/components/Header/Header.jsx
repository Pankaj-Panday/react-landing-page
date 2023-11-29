import React from "react";
import Link from "../Link/Link";
import Button from "../Button/Button";
import styles from "./header.module.css";
import Logo from "../Logo/Logo";

export default function Header() {
	return (
		<header className={`${styles.header}`}>
			<nav className={`flex ${styles.navbar}`}>
				<Link className={`left`} to="#">
					<Logo theme="dark" style={{ width: "151px", height: "24px" }} />
				</Link>
				<ul className={`flex ${styles.navList}`}>
					<li>
						<Link to="#" navlink black active medium>
							Home
						</Link>
					</li>
					<li>
						<Link to="#" navlink black medium>
							Service
						</Link>
					</li>
					<li>
						<Link to="#" navlink black medium>
							Feature
						</Link>
					</li>
					<li>
						<Link to="#" navlink black medium>
							Product
						</Link>
					</li>
					<li>
						<Link to="#" navlink black medium>
							Testimonial
						</Link>
					</li>
					<li>
						<Link to="#" navlink black medium>
							FAQ
						</Link>
					</li>
				</ul>
				<Button
					small
					type="secondary"
					style={{
						marginLeft: "auto",
					}}
					onClick={() => {
						alert("you pressed Login button");
					}} // no functionality for button
				>
					Login
				</Button>
				<Button
					small
					style={{
						marginLeft: "14px",
					}}
					onClick={() => {
						alert("you pressed signup button");
					}} // no functionality for button
				>
					Sign Up
				</Button>
			</nav>
		</header>
	);
}
