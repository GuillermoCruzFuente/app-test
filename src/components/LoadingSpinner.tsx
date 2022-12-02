import styles from "../styles/components/LoadingSpinner.module.scss";

const LoadingSpinner = ({ text }: { text: string }) => (
	<div className={styles.container}>
		<p className={styles.text}>{text}</p>

		<div className={styles.cubeGrid}>
			<div className={`${styles.cube} ${styles.cube1}`}></div>
			<div className={`${styles.cube} ${styles.cube2}`}></div>
			<div className={`${styles.cube} ${styles.cube3}`}></div>
			<div className={`${styles.cube} ${styles.cube4}`}></div>
			<div className={`${styles.cube} ${styles.cube5}`}></div>
			<div className={`${styles.cube} ${styles.cube6}`}></div>
			<div className={`${styles.cube} ${styles.cube7}`}></div>
			<div className={`${styles.cube} ${styles.cube8}`}></div>
			<div className={`${styles.cube} ${styles.cube9}`}></div>
		</div>
	</div>
);

export default LoadingSpinner;
