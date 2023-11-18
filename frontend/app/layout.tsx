import LoadingPage from "./components/loadingPage/LoadingPage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import type { Metadata } from "next";
import { Suspense } from "react";
import Head from "next/head";
import "./globals.scss";

// TODO - Frontend Metadata
export const metadata: Metadata = {
	title: "Squidgey Planet",
	description: "Test",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<body>
				<Navbar />
				<Suspense fallback={<LoadingPage />}>{children}</Suspense>
				<Footer />
			</body>
		</html>
	);
}
