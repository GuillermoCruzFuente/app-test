import { FormEvent, useRef } from "react";
import { useRevalidator } from "react-router-dom";
import { InputEmployee } from "../@types/InputEmployee";
import postEmployee from "../utils/fetchers/PostEmployee";
import styles from "../styles/components/PostEmployeeForm.module.scss";
import { newUserInputPatter } from "../utils/InputPatterns";

const PostEmployeeForm = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const lastnameRef = useRef<HTMLInputElement>(null);
	const dateRef = useRef<HTMLInputElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const revalidator = useRevalidator();

	const handleButtonSubmit = async (event: FormEvent) => {
		event.preventDefault();

		disableButton();

		const inputData = getDataFromInputs();

		const { isValid, values } = validateData(inputData);

		if (isValid) {
			const data = await postEmployee(values);

			if (data?.success) {
				handleSuccessPost();
			} else {
				handleFailPost();
			}
		}
	};

	const disableButton = () => {
		buttonRef.current!.disabled = true;
	};

	const enableButton = () => {
		buttonRef.current!.disabled = false;
	};

	const cleanInputs = () => {
		nameRef.current!.value = "";
		lastnameRef.current!.value = "";
		dateRef.current!.value = "";
	};

	const handleAfterPost = () => {
		cleanInputs();
		enableButton();
	};

	const handleSuccessPost = () => {
		revalidator.revalidate();
		handleAfterPost();
	};

	const handleFailPost = () => {
		alert("something went wrong, your post failed");
		handleAfterPost();
	};

	const validateData = (values: InputEmployee) => {
		return {
			isValid: true,
			values: values,
		};
	};

	const getDataFromInputs = (): InputEmployee => {
		return {
			name: nameRef.current!.value,
			last_name: lastnameRef.current!.value,
			birthday: new Date(dateRef.current!.value).getTime(),
		};
	};

	return (
		<form onSubmit={handleButtonSubmit} className={styles.postEmployeeForm}>
			<div className={styles.inputsContainer}>
				<label>
					name
					<input
						ref={nameRef}
						type={"text"}
						pattern={newUserInputPatter}
						required
					/>
				</label>

				<label>
					last name
					<input
						ref={lastnameRef}
						type={"text"}
						pattern={newUserInputPatter}
						required
					/>
				</label>

				<label>
					birthday
					<input ref={dateRef} type={"date"} required />
				</label>
			</div>

			<button ref={buttonRef} type={"submit"}>
				add new employee
			</button>
		</form>
	);
};

export default PostEmployeeForm;
