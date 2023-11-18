import React from "react";
import Button from "../Button/Button";
import styles from "./main.module.css";

export default function Main() {
	return (
		<section className={styles.intro}>
			<div className="container flex">
				<div>
					<h1>
						Lessons and insights <span>from 8 years</span>
					</h1>
					<p>
						Where to grow your business as a photographer: site or social media?
					</p>
					<Button
						style={{
							fontSize: "16px",
							padding: "14px 32px",
							minWidth: "128px",
							borderRadius: "4px",
						}}
						type="primary"
						onClick={() => {}}
					>
						Register
					</Button>
				</div>
				<img src="/images/introImage.svg" alt="Illustration" />
			</div>
		</section>
	);
}
