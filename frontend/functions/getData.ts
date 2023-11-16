import axios from 'axios';

export const getData = async (Endpoint: String) => {
	// TODO - Swap out endpoints with live versions
	// console.log('------------------------');
	// console.log('Retrieving:', Endpoint);
	const RawData = await axios.get(`http://127.0.0.1:1337/api/${Endpoint}`);
	// console.log('Data:', RawData.data.data);
	// console.log('------------------------');
	return RawData.data.data;
};
