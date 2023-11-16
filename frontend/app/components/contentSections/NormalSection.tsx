"use client";

import { getImageURL } from "@/functions/getImageURL";
import { ReactElement, useEffect } from "react";
import styles from "./sections.module.scss";
import { ContentSection } from "@/types";
import "aos/dist/aos.css";
import AOS from "aos";

// TODO - Swap out api prefix for content sections

type props = {
	Content: ContentSection;
	key: number;
};

export const NormalSection = ({
	Content,
	key,
}: props): ReactElement<any, any> => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const Image = Content.image_content.data.attributes;

	const BackgroundColour = Content.background_colour
		.replace(" ", "")
		.toLowerCase();

	return (
		<div
			key={key}
			className={`${styles.NormalSectionContainer} ${styles[BackgroundColour]}`}
			data-aos="fade-up"
		>
			<div className={styles.SectionImageContainer}>
				<img src={getImageURL(Image)} />
			</div>
			<div className={styles.SectionTextContainer}>
				<p className={styles.SectionTextContent}>{Content.text_content}</p>
			</div>
		</div>
	);
};
