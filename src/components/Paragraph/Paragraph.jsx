import React from "react";
import styles from "./paragraph.module.css";

export default function Paragraph({
	children = null,
	style = null,
	className = null,
	xs = null,
	sm = null,
	md = null,
	lg = null,
	bold = null,
	lightgrey = null,
	silver = null,
}) {
	return (
		<p
			style={style}
			className={`
       ${className}
       ${xs && styles.xs}
       ${sm && styles.sm}
       ${md && styles.md}
       ${lg && styles.lg}
       ${bold && styles.bold} 
       ${lightgrey && styles.lightGreyTextColor} 
       ${silver && styles.silverTextColor} 
      `}
		>
			{children}
		</p>
	);
}
