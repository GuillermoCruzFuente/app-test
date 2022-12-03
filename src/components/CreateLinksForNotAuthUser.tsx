import { NotAuthProps } from "../@types/NavLinksCreation";
import { AppRoutes } from "../routes";
import CustomNavLink from "./CustomNavLink";
import styles from "../styles/components/Navigation.module.scss";

const createLinksForNotAuthUser = ({ linkCallback }: NotAuthProps) => {
	const links: Array<JSX.Element> = [];

	Object.values(AppRoutes).forEach((route) => {
		if (!route.isProtected) {
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

	return links;
};

export default createLinksForNotAuthUser;
