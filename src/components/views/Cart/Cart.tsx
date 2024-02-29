'use client';
import { CartContext } from '@/providers/CartProvider';
import Image from 'next/image';
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
              !!cart && cart.map(({count, item}) => (
                <div className={styles.item} key={item.id}>
                  <div className={styles.image}>
                    <Image src={item.picture} alt='product pic' width={120} height={120} />
                  </div>
                  <div className={styles.info}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <div className={styles.cost}>£{item.cost}</div>
                    <div className={styles.count}>
                      <span>Количество:</span>
                      {count}
                    </div>
                    <div className={styles.actions}>
                      <button className={styles.remove} onClick={() => removeItemFromCart(item.id, true)}>Remove all</button>
                      <button className={styles.removeOne} onClick={() => removeItemFromCart(item.id)}>Remove item</button>
                    </div>
                  </div>
                </div>
              ))
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
