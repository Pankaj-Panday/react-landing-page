import React from "react";
import styles from "./link.module.css";

export default function Link({
	to,
	children,
	className,
	style,
	navlink = null,
	active = null,
	primary = null,
	silver = null,
	black = null,
	bold = null,
	small = null,
	medium = null,
	large = null,
}) {
	return (
		<a
			href={to}
			style={style}
			className={`
        ${className}  
        ${styles.link} 
        ${navlink && styles.navlink}
        ${active && styles.activelink}
        ${primary && styles.primary}
        ${silver && styles.silver}
        ${black && styles.black}
        ${bold && styles.bold}
        ${small && styles.small}
        ${medium && styles.medium}
        ${large && styles.large}
    `}
		>
			{children}
		</a>
	);
}
