import ProductList from "./productList";
import LoadingPage from "../components/loadingPage/LoadingPage";
import styles from "./page.module.scss";
import React, { Suspense } from "react";

const page = async () => {
	return (
		<Suspense fallback={<LoadingPage />}>
			<div className={styles.Products}>
				<h2>All Products</h2>
				<ProductList />
			</div>
		</Suspense>
	);
};

export default page;
