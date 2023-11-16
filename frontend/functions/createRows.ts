export const createRows = (arr: any[], chunkSize: number) => {
	const chunkedArray = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunkSize);
		chunkedArray.push(chunk);
	}
	return chunkedArray;
};
