import styles from "../styles/components/FakeTableContainer.module.scss";

const TableError = () => {
	return (
		<div className={styles.fakeTableContainer}>
			<h1>Something went wrong with the table data...</h1>
			<p>Refresh your browser or try again later.</p>
		</div>
	);
};

export default TableError;
