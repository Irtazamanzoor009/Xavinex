import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 5 },
  { name: 'Feb', sales: 3 },
  { name: 'Mar', sales: 7 },
  { name: 'Apr', sales: 6 },
  { name: 'May', sales: 9 },
  { name: 'Jun', sales: 4 },
  { name: 'Jul', sales: 10 },
];

const SalesChart = () => {
  return (
    <div className="p-4 rounded-lg shadow bg-white mt-6">
      <h2 className="text-lg font-semibold mb-4">Sales Over Time</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="sales" stroke="#000" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
