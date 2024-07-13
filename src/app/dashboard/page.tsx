import TabsMenu from "@/components/Dashboard/TabsMenu";
import prisma from "@/db/prisma-client";
import {verifySession} from "@/auth/session";
import {DataTable} from "@/components/Dashboard/DataTable";
import {columnsDefinitions} from "@/components/Dashboard/columnsDefinitions";

export default async function DashboardPage(){
  const {userId} = await verifySession();
  const rawLinks = await prisma.shortUrl.findMany({
    where: {
      userId
    }
  });
  const links = rawLinks.map(link => {
        return {
          url: link.url,
          alias: link.alias,
          clicks: link.clicks,
          createdAt: link.createdAt.toLocaleDateString(),
        }
  });

  const DashboardContents = [
    {
      title: "Your Links",
      Component: () => <DataTable columns={columnsDefinitions} data={links}/>
    },
    {
      title: "Charts",
      Component: () => <div>Charts</div>
    },
  ]

  return(
    <div className="min-h-[60vh] w-[90vw] overflow-x-hidden">
     <TabsMenu TabsContents={DashboardContents}/>
    </div>
  )
}