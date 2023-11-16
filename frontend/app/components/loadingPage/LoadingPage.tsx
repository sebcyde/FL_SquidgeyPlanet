import CircularProgress from "@mui/material/CircularProgress";
import styles from "./LoadingPage.module.scss";
import * as React from "react";
type Props = {};

const LoadingPage = (props: Props) => {
	return (
		<div className={styles.LoadingPage}>
			<CircularProgress />
		</div>
	);
};

export default LoadingPage;
