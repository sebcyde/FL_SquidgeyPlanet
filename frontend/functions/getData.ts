import axios from "axios";

export const getData = async (Endpoint: String) => {
	const RawData = await axios.get(
		`https://fl-squidgey-planet.vercel.app//api/${Endpoint}`
	);
	return RawData.data.data;
};
