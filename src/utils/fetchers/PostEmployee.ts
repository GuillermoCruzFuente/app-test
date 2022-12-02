import { EmployeePostResponse } from "../../@types/Employee";
import { InputEmployee } from "../../@types/InputEmployee";
import { END_POINT } from "../../data/Endpoint";

const postEmployee = async (
	user: InputEmployee
): Promise<EmployeePostResponse | undefined> => {
	try {
		const res = await fetch(END_POINT, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		const data = (await res.json()) as EmployeePostResponse;

		return data;
	} catch (error) {
		console.error(error);
		return undefined;
	}
};

export default postEmployee;
