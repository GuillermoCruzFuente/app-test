import LoadingSpinner from "./LoadingSpinner";
import styles from "../styles/components/FakeTableContainer.module.scss";

const TableLoader = () => {
	return (
		<div className={styles.fakeTableContainer}>
			<LoadingSpinner text='loading table data...' />
		</div>
	);
};

export default TableLoader;
