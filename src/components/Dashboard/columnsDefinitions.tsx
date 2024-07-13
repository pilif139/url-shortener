'use client'

import {ColumnDef} from '@tanstack/react-table'
import CopyButton from "@/components/CopyButton";
import Link from "next/link";

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
          <Link href={row.original.url} className="w-ful flex justify-start hover:underline">{row.original.url}</Link>
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
  }
]