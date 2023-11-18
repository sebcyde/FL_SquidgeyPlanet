import axios from "axios";

export const GetProducts = async () => {
	// TODO - Swap out endpoint
	const RawProductsData = await axios.get(
		"https://fl-squidgey-planet.vercel.app//api/products?populate=deep"
	);
	return RawProductsData.data.data;
};
