import React from "react";
import styles from "./heading.module.css";

export default function Heading({ level, children, style, className }) {
	if (!level || level < 1 || level > 4) {
		throw new Error("Invalid or unknown level for heading component");
	}
	switch (level) {
		case 1:
			return (
				<h1 style={style} className={`${className} ${styles.h1}`}>
					{children}
				</h1>
			);
		case 2:
			return (
				<h2 style={style} className={`${className} ${styles.h2}`}>
					{children}
				</h2>
			);
		case 3:
			return (
				<h3 style={style} className={`${className} ${styles.h3}`}>
					{children}
				</h3>
			);
		case 4:
			return (
				<h4 style={style} className={`${className} ${styles.h4}`}>
					{children}
				</h4>
			);
	}
}
