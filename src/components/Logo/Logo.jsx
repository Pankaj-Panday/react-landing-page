import React from "react";

export default function Logo({ theme, style, className = null }) {
	const imgUrl =
		theme === "dark" ? "images/Logo_dark.svg" : "images/Logo_light.svg";
	return (
		<img
			src={imgUrl}
			alt="Brand-Logo-Image"
			style={{ ...style, objectFit: "contain" }}
			className={className}
		/>
	);
}
