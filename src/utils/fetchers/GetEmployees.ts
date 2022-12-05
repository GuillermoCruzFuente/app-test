import type { EmployeesData } from "../../@types/Employee";
import { END_POINT } from "../../data/Endpoint";

const getEmployees = async (): Promise<EmployeesData | undefined> => {
	
	// a chain of promises is necessary in order
	// to provide the Employees page loader an asynchronous
	// way to defer data
	const getEmployeesPromise = fetch(END_POINT)
		.then((response) => {
			return response.json() as Promise<EmployeesData>;
		})
		.catch((error) => {
			console.error(error);
			return undefined;
		});

	return getEmployeesPromise;
};

export default getEmployees;
