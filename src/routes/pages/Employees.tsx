import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Table from "../../components/Table";
import type { Employee, IEmployees } from "../../@types/Employee";
import PostEmployeeForm from "../../components/PostEmployeeForm";
import styles from "../../styles/pages/Employees.module.scss";
import createEmployeeTableColumns from "../../components/CreateEmployeeTableColumns";

const Employees = () => {
	const { employees } = useLoaderData() as IEmployees;
	const [data, setData] = useState<Employee[]>(employees);

	// on every post fire a revalidate hook.
	// that way the data is kept up to date
	useEffect(() => {
		setData(employees);
	}, [employees]);

	return (
		<section className={styles.employeesSection}>
			<h1>Employees</h1>
			<p>You can check your stored data or add more</p>

			<PostEmployeeForm />

			<Table
				data={data}
				columns={createEmployeeTableColumns()}
				pagination={10}
			/>
		</section>
	);
};

export default Employees;
