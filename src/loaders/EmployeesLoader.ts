import { IEmployees } from "../@types/Employee";
import getEmployees from "../utils/fetchers/GetEmployees";

export const employeesLoader = async (): Promise<IEmployees | undefined> => {
	const employees = await getEmployees();

	if (employees?.success) {
		return employees.data;
	}

	return undefined;
};

export default employeesLoader;
