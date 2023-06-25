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
  return <div className="flex flex-col items-center justify-center h-full border-2 border-base-content rounded-2xl gap-4 p-4">
    <h4>Recent Activity</h4>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          "right": 60,
          "left": 20

        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="gold"  />
        <XAxis dataKey="date" stroke="gold" />
        <YAxis stroke="gold" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="failure" stroke="#FF0000" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="success" stroke="#00FF00" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
}