import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react";

type TabsProps = {
  TabsContents: {
    title: string;
    Component: React.FC;
  }[]
}

export default function TabsMenu({TabsContents}: TabsProps){
  return (
    <Tabs defaultValue="Your Links" className="flex items-center flex-col">
      <TabsList className="dark:bg-slate-900 grid h-max p-[0.4rem] grid-cols-2">
        {TabsContents.map((tab, index) => (
          <TabsTrigger key={index} value={tab.title} className="dark:bg-slate-800 w-[10em] text-xl">{tab.title}</TabsTrigger>
        ))}
      </TabsList>
      {TabsContents.map((tab, index) => (
        <TabsContent key={index} value={tab.title} className="min-w-[80vw]">
          <tab.Component/>
        </TabsContent>
      ))}
    </Tabs>
  )

}