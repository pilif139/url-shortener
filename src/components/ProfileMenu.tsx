import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {MdOutlineAccountBox} from "react-icons/md";
import {logout} from "@/actions/logout";
import Link from "next/link";
import {CiLogout} from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";

type ProfileMenuProps = {
  username: string;
}

export default function ProfileMenu({username} : ProfileMenuProps){
  return (
        <DropdownMenu>
            <DropdownMenuTrigger>
            <p className="flex cursor-pointer items-center gap-2 text-4xl">
                {username}
                <MdOutlineAccountBox/>
            </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-3">
              <DropdownMenuLabel>
                <p className="text-xl">{username}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator/>
              <DropdownMenuItem>
                <Link href={"/profile"} className="flex items-center gap-2 text-xl"><MdOutlineAccountBox/>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/dashboard"} className="flex items-center gap-2 text-xl"><LuLayoutDashboard/>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <form action={logout}>
                  <button type="submit" className="flex items-center gap-2 text-xl"><CiLogout/>Logout</button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
  )
}