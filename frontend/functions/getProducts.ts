import axios from "axios";

export const GetProducts = async () => {
	// TODO - Swap out endpoint
	const RawProductsData = await axios.get(
		"http://127.0.0.1:1337/api/products?populate=deep"
	);
	return RawProductsData.data.data;
};
