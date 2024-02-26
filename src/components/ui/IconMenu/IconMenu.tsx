import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './IconMenu.module.css';

const IconMenu = (): ReactNode => {
	return (
		<div className={styles.menu}>
			<Image
				src={'assets/icons/menu.svg'}
				alt='menu icon'
				width={16}
				height={16}
			/>
		</div>
	);
};

export default IconMenu;
