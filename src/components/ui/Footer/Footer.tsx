'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import NextLink from 'next/link';
import { ReactNode } from 'react';
import styles from './Footer.module.css';
const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const Footer = (): ReactNode => {
	return (
		<footer className={styles.footer}>
			<div className={styles.row}>
				<div className={styles.column}>
					<div className={styles.group}>
						<h5 className={styles.title}>Categories</h5>
						<ul className={styles.routes}>
							<li className={styles.route}>
								<NextLink href={'/crockery'}>Crockery</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/furniture'}>
									Furniture
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/homeware'}>Homeware</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/plant-pots'}>
									Plant pots
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/chairs'}>Chairs</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/crockery'}>Crockery</NextLink>
							</li>
						</ul>
					</div>
					<div className={styles.group}>
						<h5 className={styles.title}>Menu</h5>
						<ul className={styles.routes}>
							<li className={styles.route}>
								<NextLink href={'/new-arrivals'}>
									New arrivals
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/best-sellers'}>
									Best sellers
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/recently-viewed'}>
									Recently viewed
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/popular-this-week'}>
									Popular this week
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/products'}>
									All products
								</NextLink>
							</li>
						</ul>
					</div>
					<div className={styles.group}>
						<h5 className={styles.title}>Our company</h5>
						<ul className={styles.routes}>
							<li className={styles.route}>
								<NextLink href={'/about'}>About us</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/vacancies'}>
									Vacancies
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/contact-us'}>
									Contact us
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/privacy'}>Privacy</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/returns-policy'}>
									Returns policy
								</NextLink>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.column}>
					<h5 className={styles.title}>Join our mailing list</h5>
					<form
						action='#'
						className={styles.feedback}>
						<input
							type='email'
							placeholder='your@email.com'
							required
						/>
						<button type='submit'>Sign up</button>
					</form>
				</div>
				<div className={styles.column}>
					<div className={styles.copyright}>
						Copyright 2022 Avion LTD
					</div>
					<MediaQuery minWidth={'1024px'}>
						<div className={styles.socials}>
							<NextLink
								href={'/'}
								className={styles.social}>
								<Image
									src={'assets/icons/linkedin.svg'}
									alt='linkedin icon'
									width={24}
									height={24}
								/>
							</NextLink>
							<NextLink
								href={'/'}
								className={styles.social}>
								<Image
									src={'assets/icons/facebook.svg'}
									alt='facebook icon'
									width={24}
									height={24}
								/>
							</NextLink>
							<NextLink
								href={'/'}
								className={styles.social}>
								<Image
									src={'assets/icons/instagram.svg'}
									alt='instagram icon'
									width={24}
									height={24}
								/>
							</NextLink>
							<NextLink
								href={'/'}
								className={styles.social}>
								<Image
									src={'assets/icons/skype.svg'}
									alt='skype icon'
									width={24}
									height={24}
								/>
							</NextLink>
							<NextLink
								href={'/'}
								className={styles.social}>
								<Image
									src={'assets/icons/twitter.svg'}
									alt='twitter icon'
									width={24}
									height={24}
								/>
							</NextLink>
							<NextLink
								href={'/'}
								className={styles.social}>
								<Image
									src={'assets/icons/pinterest.svg'}
									alt='pinterest icon'
									width={24}
									height={24}
								/>
							</NextLink>
						</div>
					</MediaQuery>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
