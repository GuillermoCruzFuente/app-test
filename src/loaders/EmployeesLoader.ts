import { defer } from "react-router-dom";
import { EmployeesDeferredData } from "../@types/Employee";
import getEmployees from "../utils/fetchers/GetEmployees";

export const employeesLoader = async () => {
	const employeesDeferredData: EmployeesDeferredData = {
		employeesDataPromise: getEmployees(),
	};

	return defer(employeesDeferredData);
};

export default employeesLoader;
