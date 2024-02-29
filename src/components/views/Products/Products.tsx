'use client';
import Card from '@/components/ui/CardProduct/CardProduct';
import { CartContext } from '@/providers/CartProvider';
import { GetResponseProduct } from '@/types';
import type { product as Product } from '@prisma/client';
import { ReactNode, memo, useContext, useEffect, useState } from 'react';
import styles from './Products.module.css';

const CardProduct = memo(Card);

const Products = (): ReactNode => {
	const [data, setData] = useState<Product[] | [] | null>([]);
	const [count, setCount] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const { addItemToCart } = useContext(CartContext);

	const handleClick = async () => {
		if (!count) return;
		setCount((prev) => prev - 1);
		const response = await fetch(`/api/product?page=${currentPage + 1}`);
		const { data }: { data: Product[] } = await response.json();
		setData((prev) => {
			if (!prev) return data;
			return [...prev, ...data];
		});
		setCurrentPage((prev) => prev + 1);
	};

	useEffect(() => {
		const request = function () {
			fetch('/api/product')
				.then((res) => res.json())
				.then(({ count }: GetResponseProduct) => setCount(count!))
				.catch(() => setCount(0));
			fetch(`/api/product?page=${currentPage}`)
				.then((res) => res.json())
				.then(({ data }: GetResponseProduct) => setData(data!))
				.catch(() => setData([]));
		};
		request();
	}, []);

	return (
		<div className={styles.product}>
			<div className={styles.row}>
				<div className={styles.column}>
					<div className={styles.cards}>
						{!data && (
							<h4 className={styles.error}>Ничего не найдено</h4>
						)}
						{!!data &&
							data.map((item) => (
								<CardProduct
									key={item.id}
									title={item.title}
									cost={item.cost}
									picture={item.picture}
									handleClick={() => addItemToCart(item)}
								/>
							))}
					</div>
				</div>
				<div className={styles.column}>
					{!!count && (
						<button
							className={styles.getProduct}
							onClick={handleClick}>
							View more
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Products;
