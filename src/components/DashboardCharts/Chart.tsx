"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

function filterAndTransformData(data: { alias: string; clicks: number }[]): Record<string, { label: string }> {
  const result: Record<string, { label: string }> = {};

  data.forEach(item => {
    if (item.clicks > 0) {
      result[item.alias] = { label: item.alias };
    }
  });

  return result;
}


export function Chart({data}: {data: {alias: string, clicks: number}[]}) {
  const chartConfig = filterAndTransformData(data);
  console.log(data)
  console.log(chartConfig)

  return (
      <div className="w-full">
        <h1 className="w-full text-center text-2xl mt-5">Your aliases</h1>
          <ChartContainer config={chartConfig}>
            <BarChart
                accessibilityLayer
                data={data}
                layout="vertical"
                margin={{
                  left: 0,
                }}
            >
              <YAxis
                  className="text-xl"
                  dataKey="alias"
                  type="category"
                  tickLine={false}
                  axisLine={false}
              />
              <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="clicks" layout="vertical" radius={20}/>
            </BarChart>
          </ChartContainer>
      </div>
  )
}
