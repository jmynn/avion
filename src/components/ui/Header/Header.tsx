'use client';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import IconAvatar from '../IconAvatar/IconAvatar';
import IconCart from '../IconCart/IconCart';
import IconMenu from '../IconMenu/IconMenu';
import IconSearch from '../IconSearch/IconSearch';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';
const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false });

const Header = (): ReactNode => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.row}>
					<MediaQuery minWidth={'1024px'}>
						<div className={styles.column}>
							<IconSearch />
						</div>
					</MediaQuery>
					<div className={styles.column}>
						<Logo />
					</div>
					<MediaQuery maxWidth={'1023px'}>
						<div className={styles.column}>
							<IconSearch />
							<IconMenu />
						</div>
					</MediaQuery>
					<MediaQuery minWidth={'1024px'}>
						<div className={styles.column}>
							<IconCart />
							<IconAvatar />
						</div>
						<div className={styles.column}>
							<Navbar />
						</div>
					</MediaQuery>
				</div>
			</header>
		</>
	);
};

export default Header;
