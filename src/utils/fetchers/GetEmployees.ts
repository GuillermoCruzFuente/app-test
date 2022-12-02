import type { EmployeeResponse } from "../../@types/Employee";
import { END_POINT } from "../../data/Endpoint";

const getEmployees = async (): Promise<EmployeeResponse | undefined> => {
	try {
		const response = await fetch(END_POINT);

		const data = (await response.json()) as EmployeeResponse;

		return { ...data };
	} catch (error) {
		console.error(error);

		return undefined;
	}
};

export default getEmployees;
