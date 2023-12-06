import React from "react";
import Button from "../Button/Button";
import Link from "../Link/Link";
import Heading from "../Heading/Heading";
import styles from "./body.module.css";
import Paragraph from "../Paragraph/Paragraph";

export default function Body() {
	const achievementsData = [
		{
			id: 0,
			url: "images/achievementIcon-1.svg",
			count: "2,245,341",
			description: "Members",
		},
		{
			id: 0,
			url: "images/achievementIcon-2.svg",
			count: "46,328",
			description: "Clubs",
		},
		{
			id: 0,
			url: "images/achievementIcon-3.svg",
			count: "828,867",
			description: "Event Bookings",
		},
		{
			id: 0,
			url: "images/achievementIcon-4.svg",
			count: "1,926,436",
			description: "Payments",
		},
	];

	const communityUpdatesData = [
		{
			id: 0,
			heading: "Creating Streamlined Safeguarding Processes with OneRen",
			imgUrl: "images/communityUpdateImg-1.png",
		},
		{
			id: 1,
			heading:
				"What are your safeguarding responsibilities and how can you manage them?",
			imgUrl: "images/communityUpdateImg-2.png",
		},
		{
			id: 2,
			heading: "Revamping the Membership Model with Triathlon Australia",
			imgUrl: "images/communityUpdateImg-3.png",
		},
	];

	const imageSources = [
		"images/clientLogo-1.svg",
		"images/clientLogo-2.svg",
		"images/clientLogo-3.svg",
		"images/clientLogo-4.svg",
		"images/clientLogo-5.svg",
		"images/clientLogo-6.svg",
	];

	return (
		<>
			<StyledImgSection
				type="1"
				imgUrl="images/unlockIllustration.svg"
				heading="The unseen of spending three years at Pixelgrade"
				paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
			/>
			<section className={`${styles.achievements}`}>
				<div className="container flex">
					<div>
						<Heading level={2} className={styles.h2}>
							Helping a local
							<br />
							<span className={styles.primaryColorText}>
								business reinvent itself
							</span>
						</Heading>
						<Paragraph md className={styles.p}>
							We reached here with our hard work and dedication
						</Paragraph>
					</div>
					<div className={`flex ${styles.counterContainer}`}>
						<div className="flex">
							<Counter
								imgUrl={achievementsData[0].url}
								count={achievementsData[0].count}
								description={achievementsData[0].description}
								className={`${styles.achievement}`}
							/>
							<Counter
								imgUrl={achievementsData[1].url}
								count={achievementsData[1].count}
								description={achievementsData[1].description}
								className={`${styles.achievement}`}
							/>
						</div>
						<div className="flex">
							<Counter
								imgUrl={achievementsData[2].url}
								count={achievementsData[2].count}
								description={achievementsData[2].description}
								className={`${styles.achievement}`}
							/>
							<Counter
								imgUrl={achievementsData[3].url}
								count={achievementsData[3].count}
								description={achievementsData[3].description}
								className={`${styles.achievement}`}
							/>
						</div>
					</div>
				</div>
			</section>
			<StyledImgSection
				type="2"
				imgUrl="images/unlockIllustration2.svg"
				heading="How to design your site footer like we did"
				paragraph="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
        scelerisque elit erat a magna. Donec quis erat at libero ultrices
        mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
        dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
        ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
        commodo faucibus efficitur quis massa. Praesent felis est, finibus
        et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
        ipsum id gravida."
			/>
			<section className={`${styles.testimonials}`}>
				<div className="container flex">
					<img src="images/customersImg.png" alt="customer image" />
					<div>
						<figure>
							<blockquote className={`${styles.testimonialText}`}>
								Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
								lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
								eu enim metus. Vivamus sed libero ornare, tristique quam in,
								gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
								laoreet elit at ligula molestie, nec molestie mi blandit.
								Suspendisse cursus tellus sed augue ultrices, quis tristique
								nulla sodales. Suspendisse eget lorem eu turpis vestibulum
								pretium. Suspendisse potenti. Quisque malesuada enim sapien,
								vitae placerat ante feugiat eget. Quisque vulputate odio neque,
								eget efficitur libero condimentum id. Curabitur id nibh id sem
								dignissim finibus ac sit amet magna.
							</blockquote>
							<figcaption>
								<Heading level={4} className={`${styles.author}`}>
									Tim Smith
								</Heading>
								<Paragraph md lightgrey className={`${styles.designation}`}>
									British Dragon Boat Racing Association
								</Paragraph>
							</figcaption>
						</figure>
						<div className={`${styles.clientLogos} flex`}>
							{imageSources.map((src, index) => (
								<img key={index} src={src} alt={`Logo ${index + 1}`} />
							))}
							<Link primary large bold to="#">
								Meet all customers{" "}
								<span className={`${styles.arrowIcon}`}></span>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className={`${styles.communityUpdates}`}>
				<div className="container">
					<Heading level={2} className={styles.h2}>
						Caring is the new marketing
					</Heading>
					<Paragraph md className={styles.p}>
						The Nexcent blog is the best place to read about the latest
						membership insights, trends and more. See who's joining the
						community, read about how our community are increasing their
						membership income and lot's more.​
					</Paragraph>
					<div className="flex">
						{communityUpdatesData.map((updateObj) => {
							return (
								<UpdateCard
									key={updateObj.id}
									heading={updateObj.heading}
									imgUrl={updateObj.imgUrl}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

function UpdateCard({ heading, imgUrl }) {
	return (
		<div className={styles.updateCard}>
			<div
				style={{
					backgroundImage: `url(${imgUrl})`,
				}}
			></div>
			<div>
				<Heading
					level={4}
					style={{
						color: "var(--clr-neutral-grey)",
						marginBottom: "24px",
					}}
				>
					{heading}
				</Heading>
				<Link primary large bold to="#">
					Read More <span className={`${styles.arrowIcon}`}></span>
				</Link>
			</div>
		</div>
	);
}

function StyledImgSection({ type = null, imgUrl, heading, paragraph }) {
	return (
		<section
			className={`${type === "1" ? styles.imgSection1 : styles.imgSection2}`}
		>
			<div className={`container flex ${styles.container}`}>
				<img src={imgUrl} alt="Illustration" />
				<div>
					<Heading level={2} className={styles.heading}>
						{heading}
					</Heading>
					<Paragraph sm className={styles.paragraph}>
						{paragraph}
					</Paragraph>
					<Button type="primary" large style={{ marginTop: "32px" }}>
						Learn More
					</Button>
				</div>
			</div>
		</section>
	);
}

function Counter({ imgUrl, count, description, className }) {
	return (
		<div
			className={`flex ${className}`}
			style={{
				gap: "16px",
				alignItems: "center",
				minWidth: "205px",
			}}
		>
			<img src={imgUrl} alt="illustration" />
			<div>
				<Heading
					level={3}
					style={{
						color: "var(--clr-neutral-d-grey)",
					}}
				>
					{count}
				</Heading>
				<Paragraph md>{description}</Paragraph>
			</div>
		</div>
	);
}
