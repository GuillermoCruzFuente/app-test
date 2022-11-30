import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "../styles/components/CustomNavLink.module.scss";
import { NavLinkActiveHandler } from "../utils/NavLinkActiveHandler";

const CustomNavLink = (props: NavLinkProps) => {
	const { children, to, className, ...OtherProps } = props;

	const getLinkStyles: NavLinkActiveHandler = ({ isActive }) =>
		isActive ? ` ${styles.active} | ${className}` : `${className}`;

	return (
		<NavLink to={to} className={getLinkStyles} {...OtherProps}>
			{children}
		</NavLink>
	);
};

export default CustomNavLink;
