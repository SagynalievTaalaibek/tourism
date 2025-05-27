import styles from './tour-card.module.css';

const TourCard = ({ tour }) => {
	return (
		<div className={styles.card}>
			<img src={tour.imageUrl} alt={tour.title} className={styles.image} />
			<h3 className={styles.title}>{tour.title}</h3>
			<p className={styles.description}>{tour.description}</p>
		</div>
	);
};

export default TourCard;
