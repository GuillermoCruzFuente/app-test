import { Link } from "react-router-dom";
import styles from "../../styles/pages/Home.module.scss";
import useUserAuth from "../../hooks/useUserAuth";

const Home = () => {
	const { isUserAuthenticated } = useUserAuth();

	const defineLinkRoute = isUserAuthenticated ? "/employees" : "/login";

	return (
		<section className={styles.homeSection}>
			<h1>A modern Employee birthday tracking system</h1>

			<p>
				Improve the happiness of your employees and never forget that
				special day
			</p>

			<Link to={defineLinkRoute} className={styles.startLink}>
				Start
			</Link>
		</section>
	);
};

export default Home;
