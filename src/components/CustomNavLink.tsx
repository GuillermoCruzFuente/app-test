import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "../styles/components/CustomNavLink.module.scss";
import type { NavLinkActiveHandler } from "../utils/NavLinkActiveHandler";

const CustomNavLink = (props: NavLinkProps) => {
	const { children, to, className, ...OtherProps } = props;

	/**
	 * There are some specificity issues with sass module styles.
	 * Instead of match .active NavLinks (anchor tag) in scss module,
	 * provide a programmatically way of class handling
	 */
	const getLinkStyles: NavLinkActiveHandler = ({ isActive }) =>
		isActive ? ` ${styles.active} | ${className}` : `${className}`;

	return (
		<NavLink to={to} className={getLinkStyles} {...OtherProps}>
			{children}
		</NavLink>
	);
};

export default CustomNavLink;
