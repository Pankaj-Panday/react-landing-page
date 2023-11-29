import React from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./home.module.css";

export default function Home() {
	const imageSources = [
		"images/clientLogo-1.svg",
		"images/clientLogo-2.svg",
		"images/clientLogo-3.svg",
		"images/clientLogo-4.svg",
		"images/clientLogo-5.svg",
		"images/clientLogo-6.svg",
		"images/clientLogo-7.svg",
	];
	const cardData = [
		{
			icon: "images/communityIcon-1.svg",
			title: "Membership Organisations",
			description:
				"Our membership management software provides full automation of membership renewals and payments",
		},
		{
			icon: "images/communityIcon-2.svg",
			title: "National Associations",
			description:
				"Our membership management software provides full automation of membership renewals and payments",
		},
		{
			icon: "images/communityIcon-3.svg",
			title: "Clubs And Groups",
			description:
				"Our membership management software provides full automation of membership renewals and payments",
		},
	];

	return (
		<>
			<section className={styles.intro}>
				<div className="container flex">
					<div>
						<Heading level={1} className={styles.h1}>
							Lessons and insights{" "}
							<span className={styles.primaryColorText}>from 8 years</span>
						</Heading>
						<Paragraph md className={styles.p}>
							Where to grow your business as a photographer: site or social
							media?
						</Paragraph>
						<Button medium onClick={() => {}}>
							Register
						</Button>
					</div>
					<img src="/images/introImage.svg" alt="Illustration" />
				</div>
			</section>
			<section className={`${styles.clients}`}>
				<div className="container">
					<Heading level={2} className={styles.h2}>
						Our Clients
					</Heading>
					<Paragraph md className={styles.p}>
						We have been working with some Fortune 500+ clients
					</Paragraph>
					<div className={`${styles.clientLogos} flex`}>
						{imageSources.map((src, index) => {
							return <img src={src} alt={`Logo ${index + 1}`} key={index} />;
						})}
					</div>
				</div>
			</section>
			<section className={`${styles.community}`}>
				<div className="container">
					<Heading level={2} className={styles.h2}>
						Manage your entire community
						<br />
						in a single system
					</Heading>
					<Paragraph md className={styles.p}>
						Who is Nextcent suitable for?
					</Paragraph>
					<section className={`${styles.details} flex`}>
						{cardData.map((card, index) => (
							<div key={index}>
								<img src={card.icon} alt="" />
								<Heading level={3} className={styles.h3}>
									{card.title}
								</Heading>
								<Paragraph sm style={{ marginTop: "8px" }}>
									{card.description}
								</Paragraph>
							</div>
						))}
					</section>
				</div>
			</section>
		</>
	);
}
