import { Navigate } from "react-router-dom";
import useUserAuth from "../hooks/useUserAuth";
import { AppRoutes } from "../routes";

const NoMatch = () => {
	const { isUserAuthenticated } = useUserAuth();

	return isUserAuthenticated ? (
		<Navigate to={AppRoutes.employees.path} />
	) : (
		<Navigate to={AppRoutes.home.path} />
	);
};

export default NoMatch;
