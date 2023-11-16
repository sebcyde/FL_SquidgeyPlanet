import { getImageURL } from "@/functions/getImageURL";
import { getData } from "@/functions/getData";
import { ContentImageType } from "@/types";
import styles from "./page.module.scss";
import React from "react";

type AuthorData = {
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	text_content_one: string;
	text_content_two: string;
	title_content: null | string;
	image_content_one: { data: { id: 1; attributes: ContentImageType } };
	image_content_two: { data: { id: 1; attributes: ContentImageType } };
};

const page = async () => {
	const AuthorData = await getData("meet-the-author-page?populate=deep");
	const Data: AuthorData = AuthorData.attributes;

	const ImageOne = getImageURL(Data.image_content_one.data.attributes);
	const ImageTwo = getImageURL(Data.image_content_two.data.attributes);

	return (
		<div className={styles.AuthorPage}>
			<h2 className={styles.PageTitle}>{Data.title_content}</h2>
			<p className={styles.TextOne}>{Data.text_content_one}</p>
			<div className={styles.ImageContainer}>
				<img src={ImageOne} />
			</div>
			<p className={styles.TextTwo}>{Data.text_content_two}</p>
			<div className={styles.ImageContainer}>
				<img src={ImageTwo} />
			</div>
		</div>
	);
};

export default page;
