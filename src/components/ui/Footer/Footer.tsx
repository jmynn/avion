'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import NextLink from 'next/link';
import { ReactNode } from 'react';
import styles from './Footer.module.css';
import FormFeedback from '../FormFeedback/FormFeedback';
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
								<NextLink href={'/'}>Crockery</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>
									Furniture
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>Homeware</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>
									Plant pots
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>Chairs</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>Something</NextLink>
							</li>
						</ul>
					</div>
					<div className={styles.group}>
						<h5 className={styles.title}>Menu</h5>
						<ul className={styles.routes}>
							<li className={styles.route}>
								<NextLink href={'/'}>
									New arrivals
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>
									Best sellers
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>
									Recently viewed
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>
									Popular this week
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>
									All products
								</NextLink>
							</li>
						</ul>
					</div>
					<div className={styles.group}>
						<h5 className={styles.title}>Our company</h5>
						<ul className={styles.routes}>
							<li className={styles.route}>
								<NextLink href={'/'}>About us</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>
									Vacancies
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>
									Contact us
								</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>Privacy</NextLink>
							</li>
							<li className={styles.route}>
								<NextLink href={'/'}>
									Returns policy
								</NextLink>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.column}>
					<h5 className={styles.title}>Join our mailing list</h5>
					<FormFeedback />
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
