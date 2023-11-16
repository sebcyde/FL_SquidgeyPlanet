import { getData } from '@/functions/getData';
import styles from './Footer.module.scss';

type FooterData = {
	telephone_number: string;
	mobile_number: string;
	email: string;
	brand_tagline: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
};

const Footer = async () => {
	const FooterData = await getData('contact-information/?populate=deep');
	const Data: FooterData = FooterData.attributes;

	return (
		<div className={styles.Footer}>
			<p className={styles.Brand}>{Data.brand_tagline}</p>
			<span className={styles.PhoneContainer}>
				<p>T - {Data.telephone_number}</p>
				<p>M - {Data.mobile_number}</p>
			</span>
			<p className={styles.Email}>{Data.email}</p>
		</div>
	);
};

export default Footer;
