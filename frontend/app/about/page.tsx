"use client";

import { CenteredSection } from "../components/contentSections/CenteredSection";
import { NormalSection } from "../components/contentSections/NormalSection";
import LoadingPage from "../components/loadingPage/LoadingPage";
import { ContentImageType, ContentSection } from "@/types";
import { getData } from "@/functions/getData";
import { Suspense, useEffect, useState } from "react";
import Hero from "../home/components/Hero";
import styles from "./page.module.scss";

const page = () => {
	const [PageData, setPageData] = useState<ContentSection[] | null>();
	const [headerImage, setheaderImage] = useState<ContentImageType | null>();

	const PullData = async () => {
		const AboutData = await getData("about-page?populate=deep");

		console.log("About Header:", AboutData.attributes.header_image);

		const HeaderImage: ContentImageType =
			AboutData.attributes.header_image.data.attributes;
		const Data: ContentSection[] = AboutData.attributes.about_component;
		setheaderImage(HeaderImage);
		setPageData(Data);
	};

	useEffect(() => {
		PullData();
	}, []);

	return (
		<div className={styles.AboutPage}>
			{PageData && headerImage ? (
				<>
					<Hero Copy="" Header="" Image={headerImage} />
					{PageData.map((Section: ContentSection) => {
						return Section.center_title ? (
							<CenteredSection Content={Section} key={Section.id} />
						) : (
							<NormalSection Content={Section} key={Section.id} />
						);
					})}
				</>
			) : (
				<>
					<LoadingPage />
				</>
			)}
		</div>
	);
};

export default page;
