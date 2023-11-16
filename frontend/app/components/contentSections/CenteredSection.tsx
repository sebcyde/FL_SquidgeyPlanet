"use client";

import { getImageURL } from "@/functions/getImageURL";
import { ReactElement, useEffect } from "react";
import { ContentSection } from "@/types";
import styles from "./sections.module.scss";
import "aos/dist/aos.css";
import AOS from "aos";

// TODO - Swap out api prefix for content sections

type props = {
	Content: ContentSection;
	key: number;
};

export const CenteredSection = ({
	Content,
	key,
}: props): ReactElement<any, any> => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const Image = Content.image_content.data.attributes;

	return (
		<div
			key={key}
			className={styles.CenteredSectionContainer}
			data-aos="fade-up"
		>
			<h2 className={styles.SectionTitle}>{Content.title_content}</h2>
			<div className={styles.ContentContainer}>
				<div className={styles.SectionImageContainer}>
					<img src={getImageURL(Image)} />
				</div>
				<div className={styles.SectionTextContainer}>
					<p className={styles.SectionTextContent}>{Content.text_content}</p>
				</div>
			</div>
		</div>
	);
};
