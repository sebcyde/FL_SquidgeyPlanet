import { Product } from '@/types';
import styles from './page.module.scss';
import React from 'react';
import { AddToCart } from '@/functions/AddToCart';

type Props = {
	id: number;
	AllItems: Product[];
};

const page = async ({ id, AllItems }: Props) => {
	const OtherItems = AllItems.filter((it) => it.id != id);
	const FullItem = AllItems.filter((it) => it.id == id)[0];
	const Item = FullItem.attributes;

	return (
		<div className={styles.ProductPage}>
			<div className={styles.MainContainer}>
				<img className={styles.Image} />
				<div className={styles.InfoContainer}>
					Product ID Page - {id}
					<p className={styles.Descr}>{Item.Product_Description}</p>
					<span>
						{Item.Product_Price}
						<button onClick={() => AddToCart(FullItem)}>Add To Cart</button>
					</span>
				</div>
			</div>
			<div className={styles.OtherItemsList}>
				{OtherItems.map((OI) => {
					return (
						<div className={styles.OtherItemContainer}>
							<p>{OI.attributes.Product_Name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default page;
