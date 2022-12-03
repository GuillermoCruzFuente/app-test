import type { AuthProps } from "../@types/NavLinksCreation";
import type { CustomRoute } from "../@types/routes";
import { logout } from "../features/login/loginSlice";
import { AppRoutes } from "../routes";
import CustomNavLink from "./CustomNavLink";
import styles from "../styles/components/Navigation.module.scss";

const createLinksForAuthUser = ({ linkCallback, dispatch }: AuthProps) => {
	const links: Array<JSX.Element> = [];

	const isNotLoginRoute = (route: CustomRoute) =>
		route.path != AppRoutes.login.path;

	const handleLogOut = () => {
		dispatch(logout());
		linkCallback();
	};

	Object.values(AppRoutes).forEach((route) => {
		if (isNotLoginRoute(route)) {
			links.push(
				<li key={route.path}>
					<CustomNavLink
						to={route.path}
						className={styles.link}
						onClick={linkCallback}
					>
						{route.text}
					</CustomNavLink>
				</li>
			);
		}
	});

	links.push(
		<li key={"logout"}>
			<button className={styles.logout} onClick={handleLogOut}>
				logOut
			</button>
		</li>
	);

	return links;
};

export default createLinksForAuthUser;
