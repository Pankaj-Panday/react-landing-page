import React from "react";
import styles from "./button.module.css";

export default function Button({ children, style, type, onClick }) {
	let className = null;

	switch (type) {
		case "primary":
			className = styles.btnPrimary;
			break;
		case "secondary":
			className = styles.btnSecondary;
			break;
		default:
			className = null;
	}
	console.log(className);
	return (
		<button className={className} style={style} onClick={onClick}>
			{children}
		</button>
	);
}
