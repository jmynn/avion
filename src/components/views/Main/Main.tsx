import Image from 'next/image';
import NextLink from 'next/link';
import { ReactNode } from 'react';
import styles from './Main.module.css';

const Main = (): ReactNode => {
	return (
		<main className={styles.main}>
			<div className={styles.row}>
				<div className={styles.column}>
					<h1 className={styles.title}>Luxury homeware for people who love timeless design quality</h1>
					<h2 className={styles.subtitle}>With our new collection, view over 400 bespoke pieces from homeware through to furniture today</h2>
					<NextLink href={'/'} className={styles.link}>View collection</NextLink>
				</div>
				<div className={styles.column}>
          <Image src={'/assets/main/main.webp'} priority fill alt='main picture' sizes='(min-width: 1440px) 100vw' />
        </div>
			</div>
		</main>
	);
};

export default Main;
