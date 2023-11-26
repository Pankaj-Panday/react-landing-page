import React from "react";
import Button from "../Button/Button";
import styles from "./footer.module.css";

export default function Footer() {
	return (
		<>
			<section className={`${styles.demo}`}>
				<div className="container">
					<h2>Pellentesque suscipit fringilla libero eu.</h2>
					<Button
						type="primary"
						style={{
							padding: "14px 32px",
							minWidth: "151px",
							borderRadius: "4px",
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
						<a href="#">
							<img
								src="images/Logo2.svg"
								alt="brand logo"
								className={`${styles.brandLogo}`}
							/>
						</a>
						<p>Copyright © {new Date().getFullYear()} Nexcent ltd.</p>
						<p>All rights reserved</p>
						<section className={`${styles.socials} flex`}>
							<a href="" className="flex">
								<img src="images/instaLogo.svg" alt="Instagram" />
							</a>
							<a href="" className="flex">
								<img src="images/socialLogo.svg" alt="Social" />
							</a>
							<a href="" className="flex">
								<img src="images/twitterLogo.svg" alt="Twitter" />
							</a>
							<a href="" className="flex">
								<img src="images/youtubeLogo.svg" alt="Youtube" />
							</a>
						</section>
					</div>
					<div className={`${styles.links} flex`}>
						<section>
							<h4>Company</h4>
							<ul>
								<li>
									<a href="#">About us</a>
								</li>
								<li>
									<a href="#">Blog</a>
								</li>
								<li>
									<a href="#">Contact us</a>
								</li>
								<li>
									<a href="#">Pricing</a>
								</li>
								<li>
									<a href="#">Testimonials</a>
								</li>
							</ul>
						</section>
						<section>
							<h4>Support</h4>
							<ul>
								<li>
									<a href="#">Help center</a>
								</li>
								<li>
									<a href="#">Terms of service</a>
								</li>
								<li>
									<a href="#">Legal</a>
								</li>
								<li>
									<a href="#">Privacy policy</a>
								</li>
								<li>
									<a href="#">Status</a>
								</li>
							</ul>
						</section>
						<section>
							<h4>Stay up to date</h4>
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
