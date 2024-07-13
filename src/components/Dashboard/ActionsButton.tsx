import {toast} from "sonner";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {IoMdMore} from "react-icons/io";
import deleteUrl from "@/actions/delete";
import {Row} from "@tanstack/table-core";
import {ShortLink} from "@/components/Dashboard/columnsDefinitions";
import CopyOption from "@/components/Dashboard/CopyOption";

export default function ActionsButton({row}: { row: Row<ShortLink>}){

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
          <DropdownMenuItem>
            <CopyOption row={row}/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}