'use client'

import {ColumnDef} from '@tanstack/react-table'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import ActionsButton from "@/components/Dashboard/ActionsButton";

export type ShortLink = {
    url: string;
    alias: string;
    clicks: number;
    createdAt: string;
}

export const columnsDefinitions: ColumnDef<ShortLink>[] = [
  {
    header: ({column})=>{
      return(
          <div className="md:min-w-[30em] w-[15em]">URL</div>
      )
    },
    accessorKey: "url",
    cell: ({row}) => {
      return (
          <Link target="_blank" href={row.original.url} className="w-ful flex justify-start hover:underline">{row.original.url}</Link>
      )
    }
  },
  {
    header: "Alias",
    accessorKey: "alias",
  },
  {
    header: ({column})=>{
      return (
      <div className="flex items-center justify-center">
        Clicks
        <Button variant="ghost"
                className="p-2 m-2"
                onClick={() => {column.toggleSorting(column.getIsSorted() === "asc")}}
        >
          <LuArrowUpDown className="text-2xl"/>
        </Button>
      </div>
      )
    },
    accessorKey: "clicks",
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
  },
  {
    id: "actions",
    cell: ({row})=> ActionsButton({row})
  }
]