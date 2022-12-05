import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import Table from "../../components/Table";
import type {
	EmployeesData,
	EmployeesDeferredData,
} from "../../@types/Employee";
import PostEmployeeForm from "../../components/PostEmployeeForm";
import styles from "../../styles/pages/Employees.module.scss";
import createEmployeeTableColumns from "../../components/CreateEmployeeTableColumns";
import TableLoader from "../../components/TableLoader";
import TableError from "../../components/TableError";

const Employees = () => {
	const { employeesDataPromise } = useLoaderData() as EmployeesDeferredData;

	return (
		<section className={styles.employeesSection}>
			<h1>Employees</h1>
			<p>You can check your active employees or add more to your table</p>

			<PostEmployeeForm />

			<Suspense fallback={<TableLoader />}>
				<Await
					resolve={employeesDataPromise}
					errorElement={<TableError />}
					children={(employeesData: EmployeesData) => (
						<Table
							data={employeesData.data.employees}
							columns={createEmployeeTableColumns()}
							pagination={10}
						/>
					)}
				/>
			</Suspense>
		</section>
	);
};

export default Employees;
