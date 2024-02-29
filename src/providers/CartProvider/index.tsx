'use client';
import type { product as Product } from '@prisma/client';
import {
    ReactNode,
    createContext,
    useCallback,
    useMemo,
    useState,
} from 'react';

type Cart<P = Product> = {
	count: number;
	item: P;
};

type ContextAccess<C = Cart, P = Product> = {
	readonly cart: C[];
	addItemToCart: (newItem: P) => boolean;
	removeItemFromCart: (newItem: string, all?: boolean) => boolean;
};

export const CartContext = createContext<ContextAccess>({} as ContextAccess);

const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<Cart[]>([]);
	const addItemToCart = useCallback(
		(newItem: Product) => {
			const indexItem =
				!!cart && cart.map((i) => i.item.id).indexOf(newItem.id);
			if (indexItem === -1) {
				setCart((prev) => [
					...prev,
					{
						count: 1,
						item: newItem,
					},
				]);
			} else {
				setCart((prev) => {
					const copy = [...prev];
					copy[indexItem].count += 1;
					return copy;
				});
			}

			return true;
		},
		[cart]
	);
	const removeItemFromCart = useCallback(
		(removeItemId: string, all?: boolean) => {
			const indexItem =
				!!cart && cart.map((i) => i.item.id).indexOf(removeItemId);
			if (indexItem === -1) return false;
			if(cart[indexItem].count === 1 || all) {
				setCart((prev) => {
					const filtered = prev.toSpliced(indexItem, 1);
					return filtered;
				});
				return true
			}
			if (cart[indexItem].count > 1) {
				setCart((prev) => {
					const copy = [...prev];
					copy[indexItem].count -= 1;
					return copy;
				});
				return true;
			}
		},
		[cart]
	);

	const contextObject = useMemo<ContextAccess>(
		() => ({
			cart,
			addItemToCart,
			removeItemFromCart,
		}),
		[cart, addItemToCart, removeItemFromCart]
	);

	return (
		<CartContext.Provider value={contextObject}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
