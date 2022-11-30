import { Outlet } from "react-router-dom";
import Nav from "./components/Navigation";
import styles from "./styles/components/Root.module.scss";

const Root = () => (
	<>
		<Nav />
		<div className={styles.outletContainer}>
			<Outlet />
		</div>
	</>
);

export default Root;

