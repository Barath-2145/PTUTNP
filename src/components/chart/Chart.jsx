import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const ResponsivePieChart = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <>
    <ResponsiveContainer width="90%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={150}
          outerRadius={180}
          fill="#8884d8"
          label={({ value }) => `${value}`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend align="center" layout="vertical" verticalAlign="middle" />
      </PieChart>
    </ResponsiveContainer>
    </>
  );
};

export default ResponsivePieChart;
