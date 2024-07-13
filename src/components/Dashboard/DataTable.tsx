'use client'

import {useState} from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {Button} from "@/components/ui/button";

type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData,TValue>[];
    data: TData[];
}

export function DataTable<TData,TValue>({columns, data}: DataTableProps<TData,TValue>){
  const [sorting,setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
        sorting,
        columnFilters,
    }
  })

  return (
      <div>
        <div className="flex items-center py-4">
          <input type="text"
                 placeholder="Filter by alias..."
                 value={(table.getColumn("alias")?.getFilterValue() as string) ?? ""}
                 onChange={(e) => table.getColumn("alias")?.setFilterValue(e.target.value)}
                 className="max-w-sm p-2 rounded-xl text-black outline-none dark:bg-slate-900 dark:text-white transition focus:dark:bg-slate-700 bg-slate-300 focus:bg-slate-100"
          />
        </div>
        <div>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}
                            className="dark:hover:bg-slate-900 hover:bg-slate-300 bg-slate-300 dark:bg-slate-900">
                    {headerGroup.headers.map((header) => {
                      return (
                          <TableHead key={header.id}
                                     className="text-lg hover:bg-slate-400 dark:hover:bg-slate-950 transition text-center text-black">
                            {header.isPlaceholder ? null : (
                                flexRender(header.column.columnDef.header, header.getContext()
                                ))}
                          </TableHead>
                      )
                    })}
                  </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                      <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
                          className="dark:hover:bg-slate-900"
                      >
                        {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}
                                       className="text-lg hover:bg-slate-100 dark:hover:bg-slate-950 transition text-center">
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                        ))}
                      </TableRow>
                  ))
              ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-950 cursor-pointer"
          >
            Previous
          </Button>
          <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-950 cursor-pointer"
          >
            Next
          </Button>
        </div>
      </div>
)
}