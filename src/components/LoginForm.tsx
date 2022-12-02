import { useDispatch } from "react-redux";
import { login, User } from "../features/login/loginSlice";
import { FormEvent, useRef, useState } from "react";
import { isValidUser } from "../data/ValidUser";
import { useNavigate } from "react-router-dom";
import SafeInput from "../components/SafeInput";
import LoadingSpinner from "./LoadingSpinner";

const LoginForm = ({ className }: { className?: string }) => {
	const usernameInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const buttonInputRef = useRef<HTMLButtonElement>(null);

	const [isValidatingUser, setIsValidatingUser] = useState(false);

	const dispatch = useDispatch();
	const navigateTo = useNavigate();

	const getUserFromInputs = (): User => ({
		name: usernameInputRef.current!.value,
		password: passwordInputRef.current!.value,
	});

	const disableInputs = () => {
		usernameInputRef.current!.disabled = true;
		passwordInputRef.current!.disabled = true;
		buttonInputRef.current!.disabled = true;
	};

	const enableInputs = () => {
		usernameInputRef.current!.disabled = false;
		passwordInputRef.current!.disabled = false;
		buttonInputRef.current!.disabled = false;
	};

	const showLoader = () => setIsValidatingUser(true);

	const hideLoader = () => setIsValidatingUser(false);

	const enableLoadingState = () => {
		disableInputs();
		showLoader();
	};

	const disableLoadingState = () => {
		enableInputs();
		hideLoader();
	};

	const verifyingData = async (user: User): Promise<boolean> => {
		enableLoadingState();

		const isValid = await isValidUser(user);

		disableLoadingState();

		return isValid;
	};

	const formSubmitHandler = async (event: FormEvent) => {
		// prevent page reload
		event.preventDefault();

		const inputUser = getUserFromInputs();

		const isValid = await verifyingData(inputUser);

		if (isValid) {
			dispatch(login(inputUser));
			navigateTo("/employees");
		} else {
			alert("That user does not exist");
			usernameInputRef.current!.focus();
		}
	};

	return (
		<form onSubmit={formSubmitHandler} className={className}>
			<h1>Welcome Back</h1>

			<label>
				username
				<SafeInput ref={usernameInputRef} type={"text"} required/>
			</label>

			<label>
				password
				<SafeInput ref={passwordInputRef} type={"password"} required/>
			</label>

			<button ref={buttonInputRef} type={"submit"}>
				Login
			</button>

			{!!isValidatingUser && (
				<LoadingSpinner text='We are making sure that you are real' />
			)}
		</form>
	);
};

export default LoginForm;
