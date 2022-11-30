import { Link } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";
import { AppRoutes } from "../routes";

import styles from "../styles/components/Navigation.module.scss";

const Nav = () => {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.logo} to='/'>
				AppTest
			</Link>

			<ol>
				{Object.values(AppRoutes).map(
					(route) =>
						!route.protected && (
							<li key={route.path}>
								<CustomNavLink
									to={route.path}
									className={styles.link}
								>
									{route.text}
								</CustomNavLink>
							</li>
						)
				)}
			</ol>
		</nav>
	);
};

export default Nav;
