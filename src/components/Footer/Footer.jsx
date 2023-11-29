import React from "react";
import Button from "../Button/Button";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import styles from "./footer.module.css";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";

export default function Footer() {
	return (
		<>
			<section className={`${styles.demo}`}>
				<div className="container">
					<Heading level={2} className={styles.h2}>
						Pellentesque suscipit fringilla libero eu.
					</Heading>
					<Button
						large
						style={{
							margin: "0 auto",
							display: "block",
						}}
					>
						Get a Demo
					</Button>
				</div>
			</section>
			<section className={`${styles.footer}`}>
				<div className="container flex">
					<div className={`${styles.companyInfo}`}>
						<Link to="#">
							<Logo className={`${styles.brandLogo}`} />
						</Link>
						<Paragraph sm silver className={styles.p}>
							Copyright © {new Date().getFullYear()} Nexcent ltd.
						</Paragraph>
						<Paragraph sm silver className={styles.p}>
							All rights reserved
						</Paragraph>
						<section className={`${styles.socials} flex`}>
							<Link to="#" className="flex">
								<img src="images/instaLogo.svg" alt="Instagram" />
							</Link>
							<Link to="#" className="flex">
								<img src="images/socialLogo.svg" alt="Social" />
							</Link>
							<Link to="#" className="flex">
								<img src="images/twitterLogo.svg" alt="Twitter" />
							</Link>
							<Link to="#" className="flex">
								<img src="images/youtubeLogo.svg" alt="Youtube" />
							</Link>
						</section>
					</div>
					<div className={`${styles.links} flex`}>
						<section>
							<Heading level={4} className={styles.h4}>
								Company
							</Heading>
							<ul>
								<li>
									<Link small silver to="#">
										About us
									</Link>
								</li>
								<li>
									<Link small silver to="#">
										Blog
									</Link>
								</li>
								<li>
									<Link small silver to="#">
										Contact us
									</Link>
								</li>
								<li>
									<Link small silver to="#">
										Pricing
									</Link>
								</li>
								<li>
									<Link small silver to="#">
										Testimonials
									</Link>
								</li>
							</ul>
						</section>
						<section>
							<Heading level={4} className={styles.h4}>
								Support
							</Heading>
							<ul>
								<li>
									<Link small silver to="#">
										Help center
									</Link>
								</li>
								<li>
									<Link small silver to="#">
										Terms of service
									</Link>
								</li>
								<li>
									<Link small silver to="#">
										Legal
									</Link>
								</li>
								<li>
									<Link small silver to="#">
										Privacy policy
									</Link>
								</li>
								<li>
									<Link small silver to="#">
										Status
									</Link>
								</li>
							</ul>
						</section>
						<section>
							<Heading level={4} className={styles.h4}>
								Stay up to date
							</Heading>
							<form
								action="#"
								onSubmit={(event) => {
									event.preventDefault();
									alert("submitted");
								}}
								className={`${styles.form}`}
							>
								<input type="email" placeholder="Your email address" />
								<button>
									<img src="images/sendIcon.svg" alt="send button Image" />
								</button>
							</form>
						</section>
					</div>
				</div>
			</section>
		</>
	);
}
