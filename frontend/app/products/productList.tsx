import { GetProducts } from "@/functions/getProducts";
import { getImageURL } from "@/functions/getImageURL";
import { createRows } from "@/functions/createRows";
import Stack from "@mui/material/Stack";
import styles from "./page.module.scss";
import { ContentImageType, Product } from "@/types";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type ProductElementProps = {
	MainImage: ContentImageType;
	ImageURL: string;
	Item: Product;
};

const ProductElement = ({ Item, MainImage, ImageURL }: ProductElementProps) => {
	const Product = Item.attributes;

	return (
		<Card sx={{ height: 380, width: 345, textAlign: "center" }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="250"
					image={ImageURL}
					alt={
						MainImage.alternativeText
							? MainImage.alternativeText
							: MainImage.name
					}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{Product.Product_Name}
					</Typography>
					<Typography gutterBottom variant="body2" color="text.secondary">
						{Product.Product_Description}
					</Typography>
					{Product.Product_Stock == "Low stock" && (
						<Typography variant="body2" className={styles.LowStockText}>
							LOW STOCK
						</Typography>
					)}
					{Product.Product_Stock == "Out of stock" && (
						<Typography variant="body2" className={styles.NoStockText}>
							OUT OF STOCK
						</Typography>
					)}
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

const ProductList = async () => {
	const AllProducts: Product[] = await GetProducts();
	const ProductRows: Product[][] = createRows(AllProducts, 3);

	return ProductRows.map((Row) => {
		return (
			<div className={styles.ProductRow}>
				{Row.map((RowItem: Product) => {
					const RowItemImages = RowItem.attributes.Product_Image.data;
					const MainImage: ContentImageType = RowItemImages[0].attributes;
					const MainImageURL: string = getImageURL(MainImage);
					return (
						<ProductElement
							Item={RowItem}
							MainImage={MainImage}
							ImageURL={MainImageURL}
						/>
					);
				})}
			</div>
		);
	});
};
export default ProductList;
