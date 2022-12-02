import { Navigate } from "react-router-dom";
import useUserAuth from "../hooks/useUserAuth";

type ProtectedRouteProps = {
	children: JSX.Element;
	redirecTo: string;
};

const ProtectedRoute = ({
	children,
	redirecTo,
}: ProtectedRouteProps): JSX.Element => {
	const { isUserAuthenticated } = useUserAuth();

	return isUserAuthenticated ? children : <Navigate to={redirecTo} />;
};

export default ProtectedRoute;
