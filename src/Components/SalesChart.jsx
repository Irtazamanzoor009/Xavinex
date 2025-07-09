// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Jan', sales: 5 },
//   { name: 'Feb', sales: 3 },
//   { name: 'Mar', sales: 7 },
//   { name: 'Apr', sales: 6 },
//   { name: 'May', sales: 9 },
//   { name: 'Jun', sales: 4 },
//   { name: 'Jul', sales: 10 },
// ];

// const SalesChart = () => {
//   return (
//     <div className="p-4 rounded-lg shadow bg-white mt-6">
//       <h2 className="text-lg font-semibold mb-4">Sales Over Time</h2>
//       <ResponsiveContainer width="100%" height={250}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Line type="monotone" dataKey="sales" stroke="#000" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default SalesChart;

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Day 1', revenue: 9 },
  { name: 'Day 2', revenue: 11 },
  { name: 'Day 3', revenue: 19 },
  { name: 'Day 4', revenue: 21 },
  { name: 'Day 5', revenue: 22 },
];

const SalesChart = () => {
  return (
    <div className="p-4 rounded-lg shadow bg-white mt-6">
      <h2 className="text-2xl font-semibold mb-4">Sales Over Time</h2>

      <div className="flex justify-between items-start">

        <div className="w-4/5 ml-15">

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data} barSize={100}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis ticks={[0, 5, 10, 15, 20, 25]} />
              <Tooltip />
              <Bar dataKey="revenue" fill="#d4a327" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>

        </div>

        <div className="flex items-center mr-10 text-lg mt-4 ">
          <div className="w-10 h-4 mr-2" style={{ backgroundColor: '#d4a327' }}></div>
          <span>Revenue</span>
        </div>
      </div>

    </div>
  );
};

export default SalesChart;

