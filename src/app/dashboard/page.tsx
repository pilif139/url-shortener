import TabsMenu from "@/components/Dashboard/TabsMenu";
import prisma from "@/db/prisma-client";
import {verifySession} from "@/auth/session";
import {DataTable} from "@/components/Dashboard/DataTable";
import {columnsDefinitions} from "@/components/Dashboard/columnsDefinitions";
import {Chart} from "@/components/DashboardCharts/Chart";

export default async function DashboardPage(){
  const {userId} = await verifySession();
  const rawLinks = await prisma.shortUrl.findMany({
    where: {
      userId
    }
  });

  const dashboardLinks = rawLinks.map(link => {
        return {
          url: link.url,
          alias: link.alias,
          clicks: link.clicks,
          createdAt: link.createdAt.toLocaleDateString(),
        }
  });

  const chartLinks = rawLinks.map(link => {
    return {
      alias: link.alias,
      clicks: link.clicks,
    }
  }).filter(link => link.clicks > 0);

  const DashboardContents = [
    {
      title: "Your Links",
      Component: () => <DataTable columns={columnsDefinitions} data={dashboardLinks}/>
    },
    {
      title: "Charts",
      Component: () => <Chart data={chartLinks}/>
    },
  ]

  return(
    <div className="min-h-[60vh] w-[95vw] overflow-x-hidden">
     <TabsMenu TabsContents={DashboardContents}/>
    </div>
  )
}