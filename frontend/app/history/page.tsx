import { getData } from "@/functions/getData";
import styles from "./page.module.scss";
import React from "react";
import { getImageURL } from "@/functions/getImageURL";

const page = async () => {
	const HistoryData = await getData("history-page?populate=deep");
	const Data = HistoryData.attributes;

	const ImageOne = getImageURL(Data.image_content_one.data.attributes);
	const ImageTwo = getImageURL(Data.image_content_two.data.attributes);

	return (
		<div className={styles.HistoryPageContainer}>
			<h2 className={styles.PageTitle}>{Data.title_content}</h2>
			<p className={styles.TextOne}>{Data.text_content_one}</p>
			<div className={styles.ImageContainer}>
				<img src={ImageOne} />
				<p className={styles.TextOneSub}>{Data.image_one_subtext}</p>
			</div>
			<p className={styles.TextTwo}>{Data.text_content_two}</p>
			<div className={styles.ImageContainer}>
				<img src={ImageTwo} />
				<p className={styles.TextTwoSub}>{Data.image_two_subtext}</p>
			</div>
		</div>
	);
};

export default page;
