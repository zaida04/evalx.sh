"use client";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    date: '01/02/2023',
    total: 5,
    success: 3,
    failure: 2
  },
  {
    date: '01/03/2023',
    total: 22,
    success: 20,
    failure: 2
  },
  {
    date: '01/04/2023',
    total: 30,
    success: 15,
    failure: 15
  },
  {
    date: '01/05/2023',
    total: 5,
    success: 2,
    failure: 3
  },
  {
    date: '01/06/2023',
    total: 60,
    success: 15,
    failure: 45
  },
];

export default function Graph() {
  return <div className="flex flex-col items-center justify-center h-full border-2 border-base-content rounded-2xl">
    <h4>Recent Activity</h4>
    <ResponsiveContainer width={550} height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="failure" stroke="#FF0000" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="success" stroke="#00FF00" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
}