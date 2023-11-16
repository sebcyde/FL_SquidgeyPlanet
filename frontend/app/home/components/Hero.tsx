import { getImageURL } from "@/functions/getImageURL";
import { ContentImageType } from "@/types";
import styles from "./hero.module.scss";
import React from "react";

type Props = {
	Image: ContentImageType;
	Header: string;
	Copy: string;
};

const Hero = ({ Copy, Header, Image }: Props) => {
	console.log("Hero Image: ", Image);

	return (
		<section className={styles.HeroContainer}>
			<img className={styles.Image} src={getImageURL(Image)} />
			<div className={styles.ContentContainer}>
				<h2 className={styles.Title}>{Header}</h2>
				<p className={styles.Content}>{Copy}</p>
			</div>
		</section>
	);
};

export default Hero;
