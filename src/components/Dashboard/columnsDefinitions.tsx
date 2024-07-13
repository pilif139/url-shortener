'use client'

import {ColumnDef} from '@tanstack/react-table'
import CopyButton from "@/components/CopyButton";
import Link from "next/link";
import { IoMdMore } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button";
import deleteUrl from "@/actions/delete";
import {toast} from "sonner";

export type ShortLink = {
    url: string;
    alias: string;
    clicks: number;
    createdAt: string;
}

export const columnsDefinitions: ColumnDef<ShortLink>[] = [
  {
    header: "URL",
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
    header: "Clicks",
    accessorKey: "clicks",
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
  },
  {
    header: "Short URL",
    accessorKey: "short url",
    cell: ({row})=>{
      let protocol = undefined
      let hostname = undefined
      let port = undefined
      if (typeof window !== 'undefined') {
        protocol = window.location.protocol;
        hostname = window.location.hostname;
        port = window.location.port;
      }
      const portPart = port ? `:${port}` : '';
      const shortLink = `${protocol}//${hostname}${portPart}/${row.original.alias}`;
      return (
          <div className="w-full flex justify-center">
            <CopyButton text={shortLink}/>
          </div>
      )
    }
  },
  {
    id: "actions",
    cell: ({row}) => {
      const handleToaster = () =>{
        toast.warning("Link deleted!")
      }

      return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 flex items-center">
                <span className="sr-only">Open menu</span>
                <IoMdMore className="h-8 w-8"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <form action={()=>deleteUrl(row.original.alias)}>
                  <button type="submit" className="text-xl" onClick={handleToaster}>Delete</button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      )
    }

  }
]