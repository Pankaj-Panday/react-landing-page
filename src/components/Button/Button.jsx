import React from "react";
import styles from "./button.module.css";

export default function Button({
	children,
	style,
	onClick,
	className,
	type,
	small = null,
	medium = null,
	large = null,
}) {
	return (
		<button
			onClick={onClick}
			style={style}
			className={`
				${className}
				${type === "secondary" ? styles.btnSecondary : styles.btnPrimary}
				${small && styles.small}
				${medium && styles.medium}
				${large && styles.large}
		`}
		>
			{children}
		</button>
	);
}
