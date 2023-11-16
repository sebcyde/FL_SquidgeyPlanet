export type Product = {
	id: number;
	attributes: {
		Product_Name: string;
		Product_Description: string;
		Product_Price: number;
		Product_Stock: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		Product_Image: {
			data: RawContentImageType[];
		};
	};
};

export type ContentSection = {
	id: number;
	text_content: string;
	title_content: string;
	center_title: boolean;
	background_colour: string;
	image_content: {
		data: {
			id: number;
			attributes: {
				name: string;
				alternativeText: null | string;
				width: number;
				height: number;
				formats: {
					thumbnail: {
						name: string;
						hash: string;
						ext: string;
						mime: string;
						path: null | string;
						width: number;
						height: number;
						size: number;
						url: string;
					};
					large: {
						name: string;
						hash: string;
						ext: string;
						mime: string;
						path: null | string;
						width: number;
						height: number;
						size: number;
						url: string;
					};
					small: {
						name: string;
						hash: string;
						ext: string;
						mime: string;
						path: null | string;
						width: number;
						height: number;
						size: number;
						url: string;
					};
					medium: {
						name: string;
						hash: string;
						ext: string;
						mime: string;
						path: null | string;
						width: number;
						height: number;
						size: number;
						url: string;
					};
				};
				hash: string;
				ext: string;
				mime: string;
				size: number;
				url: string;
				createdAt: string;
				updatedAt: string;
			};
		};
	};
};

type ImageFormats = {
	thumbnail?: {
		ext: string;
		hash: string;
		height: number;
		mime: string;
		name: string;
		path: string | null;
		size: number;
		url: string;
		width: number;
	};
	small?: {
		ext: string;
		hash: string;
		height: number;
		mime: string;
		name: string;
		path: string | null;
		size: number;
		url: string;
		width: number;
	};
	medium?: {
		ext: string;
		hash: string;
		height: number;
		mime: string;
		name: string;
		path: string | null;
		size: number;
		url: string;
		width: number;
	};

	large?: {
		ext: string;
		hash: string;
		height: number;
		mime: string;
		name: string;
		path: string | null;
		size: number;
		url: string;
		width: number;
	};
};

export type RawContentImageType = {
	id: number;
	attributes: {
		name: string;
		alternativeText: string | null;
		caption: string | null;
		width: number;
		height: number;
		formats: ImageFormats;
		hash: string;
		ext: string;
		mime: string;
		size: string;
		url: string;
		previewUrl: string | null;
		provider: string;
		provider_metadata: string | null;
		createdAt: string;
		updatedAt: string;
	};
};

export type ContentImageType = RawContentImageType["attributes"];
