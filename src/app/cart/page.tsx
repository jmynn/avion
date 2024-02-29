'use client';
import CartItem from '@/components/ui/CartItem/CartItem';
import Container from '@/components/ui/Container/Container';
import { CartContext } from '@/providers/CartProvider';
import { ReactNode, useContext } from 'react';
import styles from './page.module.css';

const Page = (): ReactNode => {
	const { cart } = useContext(CartContext);
	return (
		<Container>
		    <div className={styles.cart}>
    			<h2 className={styles.title}>Ваш заказ</h2>
    			<div className={styles.items}>
    				{!!cart &&
    					cart.map(({ count, item }) => (
    						<CartItem
    							{...item}
    							count={count}
    							key={item.id}
    						/>
    					))}
    			</div>
    		</div>
		</Container>
	);
};

export default Page;
