import {
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	flexRender,
} from "@tanstack/react-table";
import { useEffect } from "react";
import type { TableEmployees } from "../@types/TableEmployees";
import styles from "../styles/components/Table.module.scss";
import TableFilter from "./TableFilter";

const Table = ({ data, columns, pagination = 10 }: TableEmployees) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	useEffect(() => {
		table.setPageSize(pagination);
	}, []);

	return (
		<>
			<table className={styles.table}>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<th
										key={header.id}
										colSpan={header.colSpan}
									>
										{header.isPlaceholder ? null : (
											<div className={styles.headCell}>
												{flexRender(
													header.column.columnDef
														.header,
													header.getContext()
												)}
												{header.column.getCanFilter() ? (
													<div>
														<TableFilter
															column={
																header.column
															}
															table={table}
														/>
													</div>
												) : null}
											</div>
										)}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => {
						return (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell) => {
									return (
										<td key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>

			<div className={styles.paginator}>
				<div className={styles.buttonsContainer}>
					<button
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
					>
						{"<<"}
					</button>
					<button
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						{"<"}
					</button>
					<button
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						{">"}
					</button>
					<button
						onClick={() =>
							table.setPageIndex(table.getPageCount() - 1)
						}
						disabled={!table.getCanNextPage()}
					>
						{">>"}
					</button>
				</div>

				<span>
					<span>Page </span>
					<strong>
						{table.getState().pagination.pageIndex + 1} of{" "}
						{table.getPageCount()}
					</strong>
				</span>
			</div>
		</>
	);
};

export default Table;
