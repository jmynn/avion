'use client';
import CartItem from '@/components/ui/CartItem/CartItem';
import { CartContext } from '@/providers/CartProvider';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode, useContext } from 'react';
import styles from './Cart.module.css';

const Cart = (): ReactNode => {
	const { back } = useRouter();
	const { cart, removeItemFromCart } = useContext(CartContext);

	const handleClick = () => back();  

	return (
		<div className={styles.cart}>
			<div className={styles.row}>
				<div className={styles.column}>
					<h1 className={styles.title}>Shopping Cart</h1>
					<div
						className={styles.close}
						onClick={handleClick}>
						
					</div>
				</div>
				<div className={styles.column}>
          <div className={styles.items}>
            {
              !!cart && cart.map(({count, item}) => <CartItem key={item.id} {...item} handleRemove={removeItemFromCart} count={count} isCart />)
            }
          </div>
        </div>
				<div className={styles.column}>
					<NextLink
						href={'/order'}
						className={styles.order}>
						Заказать
					</NextLink>
				</div>
			</div>
		</div>
	);
};

export default Cart;
