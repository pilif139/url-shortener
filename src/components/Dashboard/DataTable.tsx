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
                 className="max-w-sm rounded-xl bg-slate-300 p-2 text-black outline-none transition focus:bg-slate-100 dark:bg-slate-900 dark:text-white focus:dark:bg-slate-700"
          />
        </div>
        <div>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}
                            className="bg-slate-300 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-900">
                    {headerGroup.headers.map((header) => {
                      return (
                          <TableHead key={header.id}
                                     className="text-center text-lg text-black transition hover:bg-slate-400 dark:hover:bg-slate-950">
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
                                       className="text-center text-lg transition hover:bg-slate-100 dark:hover:bg-slate-950">
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
        <div className="flex items-center justify-end py-4 space-x-2">
          <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="cursor-pointer hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-950"
          >
            Previous
          </Button>
          <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="cursor-pointer hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-950"
          >
            Next
          </Button>
        </div>
      </div>
)
}