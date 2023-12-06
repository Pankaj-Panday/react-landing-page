import React, { useState } from "react";
import Link from "../Link/Link";
import Button from "../Button/Button";
import styles from "./header.module.css";
import Logo from "../Logo/Logo";

export default function Header() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	return (
		<header className={`${styles.header}`}>
			<div className={`${styles.navContainer} flex`}>
				<Link className={`left`} to="#">
					<Logo theme="dark" style={{ width: "151px", height: "24px" }} />
				</Link>
				<nav className={`flex ${styles.navbar} ${menuIsOpen && styles.show}`}>
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
					<ul className={`${styles.navListTwo} flex`}>
						<li>
							<Button
								small
								type="secondary"
								className={styles.btn}
								onClick={() => {
									alert("you pressed Login button");
								}} // no functionality for button
							>
								Login
							</Button>
						</li>
						<li>
							<Button
								small
								className={styles.btn}
								onClick={() => {
									alert("you pressed signup button");
								}} // no functionality for button
							>
								Sign Up
							</Button>
						</li>
					</ul>
				</nav>
				<Hamburger
					isOpen={menuIsOpen}
					handleIsOpen={() => {
						setMenuIsOpen(!menuIsOpen);
					}}
				/>
			</div>
		</header>
	);
}

function Hamburger({ isOpen, handleIsOpen }) {
	return (
		<div
			className={`${styles.hamburgerMenu} ${isOpen && styles.open}`}
			onClick={handleIsOpen}
		>
			<span className={styles.first} />
			<span className={styles.second} />
			<span className={styles.third} />
		</div>
	);
}
