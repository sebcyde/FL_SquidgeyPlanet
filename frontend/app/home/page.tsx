"use client";

import { CenteredSection } from "../components/contentSections/CenteredSection";
import { NormalSection } from "../components/contentSections/NormalSection";
import { ContentImageType, ContentSection } from "@/types";
import { getData } from "@/functions/getData";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Hero from "./components/Hero";
import LoadingPage from "../components/loadingPage/LoadingPage";

type THero = {
	Image: ContentImageType;
	Header: string;
	Copy: string;
};

const main = () => {
	const [PageData, setPageData] = useState<{
		Home: ContentSection[];
		Hero: THero;
	} | null>();

	const PullData = async () => {
		const Data = await getData("home-page?populate=deep");
		const HomeData: ContentSection[] = Data.attributes.content_section;
		const HeroData: THero = {
			Copy: Data.attributes.intro_paragraph,
			Image: Data.attributes.header_image.data.attributes,
			Header: Data.attributes.page_title,
		};

		setPageData({
			Home: HomeData,
			Hero: HeroData,
		});
	};

	useEffect(() => {
		PullData();
	}, []);

	return (
		<main className={styles.main}>
			{PageData ? (
				<>
					<Hero
						Copy={PageData.Hero.Copy}
						Header={PageData.Hero.Header}
						Image={PageData.Hero.Image}
					/>
					{PageData.Home.map((Section: ContentSection) => {
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
		</main>
	);
};

export default main;
