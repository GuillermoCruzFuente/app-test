export interface EmployeesData {
	success: boolean;
	data: EmployeesList;
}

export interface EmployeesList {
	employees: Array<Employee>;
}

export interface Employee {
	id: number;
	name: string;
	last_name: string;
	birthday: number;
}

export type EmployeesDeferredData = {
	employeesDataPromise: Promise<EmployeesData | undefined>;
};

export interface EmployeePostResponse {
	success: boolean;
	data: string;
}

export type Modify<T, R> = Omit<T, keyof R> & R;

export type InputEmployeeString = Modify<InputEmployee, { birthday: string }>;
