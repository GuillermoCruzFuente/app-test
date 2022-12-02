import { useSelector } from "react-redux";
import { RootState } from "../store";

type UseUserAuth = {
	isUserAuthenticated: boolean;
};

const useUserAuth = (): UseUserAuth => {
	const LoginState = useSelector((state: RootState) => state.login);
	
	return {
		isUserAuthenticated: LoginState.name != "",
	};
};

export default useUserAuth;
