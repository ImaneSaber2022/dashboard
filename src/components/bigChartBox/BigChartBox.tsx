
import "./bigChartBox.scss"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
   
    Tooltip,
    ResponsiveContainer
  } from "recharts";
  const data = [
    {
      name: "Sun",
      books: 4000,
      clothres: 2400,
      electronic: 2400
    },
    {
        name: "Mon",
        books: 3000,
        clothres: 1398,
        electronic: 2290
      },
      {
        name: "Tue",
        books: 2000,
        clothres: 9800,
        electronic: 2290
      },
      {
        name: "Wed",
        books: 2780,
        clothres: 4800,
        electronic: 2181
      },
      {
        name: "Sat",
        books: 3490,
        clothres: 4300,
        electronic: 2100
      },
    
  ];
const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
    <div className="chart">
   <ResponsiveContainer width="99%" height="100%">
   <AreaChart
      
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="electronic"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="clothres"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="books"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
   </ResponsiveContainer>
    </div>
    </div>
  )
}

export default BigChartBox
