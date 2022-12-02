import { Link } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";
import { AppRoutes } from "../routes";
import styles from "../styles/components/Navigation.module.scss";
import useUserAuth from "../hooks/useUserAuth";
import { useDispatch } from "react-redux";
import { logout } from "../features/login/loginSlice";

const Nav = () => {
	const dispatch = useDispatch();

	const { isUserAuthenticated } = useUserAuth();

	const handleLogOut = () => {
		dispatch(logout());
	};

	const getNavLinks = () => {
		if (isUserAuthenticated) {
			const authLinks = Object.values(AppRoutes).map(
				(route) =>
					route.path != AppRoutes.login.path && (
						<li key={route.path}>
							<CustomNavLink
								to={route.path}
								className={styles.link}
							>
								{route.text}
							</CustomNavLink>
						</li>
					)
			);

			authLinks.push(
				<li key={"logout"}>
					<button className={styles.logout} onClick={handleLogOut}>
						logOut
					</button>
				</li>
			);

			return authLinks;
		} else {
			return Object.values(AppRoutes).map(
				(route) =>
					!route.isProtected && (
						<li key={route.path}>
							<CustomNavLink
								to={route.path}
								className={styles.link}
							>
								{route.text}
							</CustomNavLink>
						</li>
					)
			);
		}
	};

	return (
		<nav className={styles.navbar}>
			<Link className={styles.logo} to='/'>
				BirthTracker
			</Link>

			<ol>{getNavLinks()}</ol>
		</nav>
	);
};

export default Nav;
