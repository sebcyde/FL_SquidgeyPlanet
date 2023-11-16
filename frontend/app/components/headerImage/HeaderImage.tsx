import { getImageURL } from "@/functions/getImageURL";
import styles from "./HeaderImage.module.scss";
import { ContentImageType } from "@/types";
import React from "react";

type Props = {
	image: ContentImageType;
};

const HeaderImage = ({ image }: Props) => {
	return (
		<div className={styles.HeaderImageContainer}>
			<img
				src={`http://localhost:1337${getImageURL(image)}`}
				className={styles.HeaderImage}
			/>
		</div>
	);
};

export default HeaderImage;
