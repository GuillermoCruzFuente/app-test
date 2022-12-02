import { Navigate } from "react-router-dom";
import useUserAuth from "../hooks/useUserAuth";
import { AppRoutes } from "../routes";
import Login from "../routes/pages/Login";

const AuthLogin = () => {
	const { isUserAuthenticated } = useUserAuth();

	return isUserAuthenticated ? (
		<Navigate to={AppRoutes.employees.path} />
	) : (
		<Login />
	);
};

export default AuthLogin;
