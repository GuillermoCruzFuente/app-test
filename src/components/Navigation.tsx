import { Link } from "react-router-dom";
import styles from "../styles/components/Navigation.module.scss";
import { useState } from "react";
import createNavMenuItems from "./CreateNavMenuItems";

const Nav = () => {
	const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);

	const hideMenu = () => {
		setIsResponsiveMenuOpen(false);
	};

	const toggleMenu = () => {
		setIsResponsiveMenuOpen(!isResponsiveMenuOpen);
	};

	const navLinks = createNavMenuItems({ linkCallback: hideMenu });

	return (
		<nav className={styles.navbar}>
			<Link className={styles.logo} to='/'>
				BirthTracker
			</Link>

			<button className={styles.menuButton} onClick={toggleMenu}>
				menu
			</button>

			<ol className={styles.deskContainer}>{navLinks}</ol>

			{isResponsiveMenuOpen && (
				<div className={styles.responsiveContainer}>
					<ol>{navLinks}</ol>
				</div>
			)}
		</nav>
	);
};

export default Nav;
