"use client"

import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts"

import {
  ChartContainer,
} from "@/components/ui/chart"
import {useEffect, useState} from "react";

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

  return (
      <div className="w-full">
        <h1 className="w-full text-center text-2xl my-5">Your aliases</h1>
          <ChartContainer config={chartConfig} className="w-full h-[70vh] bg-slate-300 dark:bg-slate-900 p-10 rounded-2xl">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={70}
            >
              <XAxis dataKey="alias" scale="point" padding={{ left: 50, right: 50 }} style={{fontSize: '20px'}}/>
              <Tooltip contentStyle={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                backgroundColor: '#f1f5f9',
                border: '1px solid #d4d4d4',
                borderRadius: '12px',
                padding: '10px',
                fontSize: '20px'
              }}/>
              <Legend wrapperStyle={{fontSize: '20px'}}/>
                <CartesianGrid strokeDasharray="5" />
              <Bar dataKey="clicks" fill="#8884d8" background={{ fill: '#00000000' }} radius={12}/>
            </BarChart>
          </ChartContainer>
      </div>
  )
}
