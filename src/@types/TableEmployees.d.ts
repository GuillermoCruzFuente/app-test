import { Employee } from "./Employee";
import { ColumnDef } from "@tanstack/react-table";

export type TableEmployees = {
	data: Employee[];
	columns: ColumnDef<Employee>[];
	pagination?: number;
};
