export interface EmployeeResponse {
	success: boolean;
	data: IEmployees;
}

export interface IEmployees {
	employees: Array<Employee>;
}

export interface Employee {
	id: number;
	name: string;
	last_name: string;
	birthday: number;
}

export interface EmployeePostResponse {
	success: boolean;
	data: string;
}

export type Modify<T, R> = Omit<T, keyof R> & R;

export type InputEmployeeString = Modify<InputEmployee, { birthday: string }>;
