import { ReactNode } from 'react';
import styles from './IconAvatar.module.css';
import Image from 'next/image';

const IconAvatar = (): ReactNode => {
	return (
		<div className={styles.avatar}>
			<Image
				src={'assets/icons/user avatar.svg'}
				alt='avatar icon'
				width={16}
				height={16}
			/>
		</div>
	);
};

export default IconAvatar;
