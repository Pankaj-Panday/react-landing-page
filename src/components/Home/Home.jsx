import React from "react";
import Button from "../Button/Button";
import styles from "./home.module.css";

export default function Home() {
	return (
		<>
			<section className={styles.intro}>
				<div className="container flex">
					<div>
						<h1>
							Lessons and insights <span>from 8 years</span>
						</h1>
						<p>
							Where to grow your business as a photographer: site or social
							media?
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
			<section className={`${styles.clients}`}>
				<div className="container">
					<h2>Our Clients</h2>
					<p>We have been working with some Fortune 500+ clients</p>
					<div className={`${styles.clientLogos} flex`}>
						<img src="images/clientLogo-1.svg" alt="Logo 1" />
						<img src="images/clientLogo-2.svg" alt="Logo 2" />
						<img src="images/clientLogo-3.svg" alt="Logo 3" />
						<img src="images/clientLogo-4.svg" alt="Logo 4" />
						<img src="images/clientLogo-5.svg" alt="Logo 5" />
						<img src="images/clientLogo-6.svg" alt="Logo 6" />
						<img src="images/clientLogo-3.svg" alt="Logo 7" />
					</div>
				</div>
			</section>
			<section className={`${styles.community}`}>
				<div className="container">
					<h2>
						Manage your entire community
						<br />
						in a single system
					</h2>
					<p>Who is Nextcent suitable for?</p>
					<section className={`${styles.details} flex`}>
						<div>
							<img src="images/communityIcon-1.svg" alt="" />
							<h3>Membership Organisations</h3>
							<p>
								Our membership management software provides full automation of
								membership renewals and payments
							</p>
						</div>
						<div>
							<img src="images/communityIcon-2.svg" alt="" />
							<h3>National Associations</h3>
							<p>
								Our membership management software provides full automation of
								membership renewals and payments
							</p>
						</div>
						<div>
							<img src="images/communityIcon-3.svg" alt="" />
							<h3>Membership Organisations</h3>
							<p>
								Our membership management software provides full automation of
								membership renewals and payments
							</p>
						</div>
					</section>
				</div>
			</section>
		</>
	);
}
