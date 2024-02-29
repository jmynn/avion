import { product as Product } from '@prisma/client';
import Image from 'next/image';
import { FunctionComponent, ReactNode } from 'react';
import styles from './CartItem.module.css';

type Props = Product & {
	handleRemove?: (id: string, all?: boolean) => boolean;
	count: number;
	isCart?: boolean;
};

const CartItem: FunctionComponent<Props> = ({
	id,
	title,
	cost,
	picture,
	handleRemove,
	count,
	isCart,
}): ReactNode => {
	return (
		<div className={styles.item}>
			<div className={styles.image}>
				<Image
					src={picture}
					alt='product pic'
					width={120}
					height={120}
				/>
			</div>
			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.cost}>£{cost}</div>
				<div className={styles.count}>
					<span>Количество:</span>
					{count}
				</div>
				{(isCart && !!handleRemove) && (
					<div className={styles.actions}>
						<button
							className={styles.remove}
							onClick={() => handleRemove(id, true)}>
							Remove all
						</button>
						<button
							className={styles.removeOne}
							onClick={() => handleRemove(id)}>
							Remove item
						</button>
					</div>
				)}{' '}
			</div>
		</div>
	);
};

export default CartItem;
