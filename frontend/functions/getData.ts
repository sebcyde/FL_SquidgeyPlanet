import axios from "axios";

export const getData = async (Endpoint: String) => {
	const RawData = await axios.get(`http://127.0.0.1:1337/api/${Endpoint}`);
	return RawData.data.data;
};
