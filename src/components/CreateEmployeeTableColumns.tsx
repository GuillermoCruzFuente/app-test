import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "../@types/Employee";

const createEmployeeTableColumns = () => {
	return useMemo<ColumnDef<Employee>[]>(
		() => [
			{
				header: "Registered Employees",
				columns: [
					{
						header: "Name",
						accessorKey: "name",
						enableColumnFilter: true,
					},
					{
						header: "Last name",
						accessorKey: "last_name",
						enableColumnFilter: true,
					},
					{
						header: "Birthday",
						accessorKey: "birthday",
						enableColumnFilter: false,
					},
				],
			},
		],
		[]
	);
};

export default createEmployeeTableColumns;
