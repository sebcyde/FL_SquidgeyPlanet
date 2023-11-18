import { ContentImageType } from "@/types";

export const getImageURL = (img: ContentImageType) => {
	let imgURL;
	if (img?.formats?.large) {
		imgURL = img.formats.large.url;
	} else if (img?.formats?.small) {
		imgURL = img.formats.small.url;
	} else if (img?.formats?.thumbnail) {
		imgURL = img.formats.thumbnail.url;
	} else if (img?.url) {
		imgURL = img.url;
	}
	return `https://fl-squidgey-planet.vercel.app/${imgURL}`;
};
