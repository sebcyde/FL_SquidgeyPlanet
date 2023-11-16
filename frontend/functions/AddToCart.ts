import { Product } from '@/types';

export const AddToCart = async (Product: Product) => {
	console.log(`Added: ${Product.attributes.Product_Name} to cart`);
};
