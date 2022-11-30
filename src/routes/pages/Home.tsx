import { Link } from "react-router-dom";
import styles from "../../styles/pages/Home.module.scss";

const Home = () => {
	return (
		<section className={styles.homeSection}>
			<h1>A modern Employee birthday tracking system</h1>

			<p>
				Improve the happiness of your employees and never forget that
				special day
			</p>

			<Link to='/login' className={styles.startLink}>Start</Link>
		</section>
	);
};

export default Home;
