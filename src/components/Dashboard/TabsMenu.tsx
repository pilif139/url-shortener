import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react";
import Link from "next/link";

type TabsProps = {
  TabsContents: {
    title: string;
    Component: React.FC;
  }[]
}

export default function TabsMenu({TabsContents}: TabsProps){
  return (
    <Tabs defaultValue="Your Links" className="flex flex-col items-center">
      <TabsList className="grid h-max grid-cols-2 p-[0.4rem] dark:bg-slate-900">
        {TabsContents.map((tab, index) => (
          <TabsTrigger key={index} value={tab.title} className="text-xl w-[10em] dark:bg-slate-800">{tab.title}</TabsTrigger>
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