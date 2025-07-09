import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import SalesChart from './components/SalesChart';

const products = [
  { name: 'Air Pods Pro', sold: 12 },
  { name: 'Nike Dunk Low', sold: 8 },
  { name: 'Apple Watch', sold: 5 },
  { name: 'Chanel Perfume', sold: 3 },
];

function App() {
  const [visibility, setVisibility] = useState('Hidden');
  const [platform, setPlatform] = useState('All Platforms');

  return (
    <div className="min-h-screen bg-gray-100 p-6 justify-end">
      <div className='flex justify-end w-full mb-6'>

        <div className="flex gap-4 ">
          <select
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
            className="p-2 pr-6 border border-gray-300 rounded-md bg-white text-sm"
          >
            <option value="Visible">Visible</option>
            <option value="Hidden">Hidden</option>
          </select>

          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="p-2 pr-6 border border-gray-300 rounded-md bg-white text-sm"
          >
            <option value="All Platforms">All Platforms</option>
            <option value="Mobile">Mobile</option>
            <option value="Web">Web</option>
            <option value="Desktop">Desktop</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-between">
        <ProductCard title="Top Selling Products" products={products} />
        <ProductCard title="Fastest Selling Products" products={products} />
      </div>
      <SalesChart />
    </div>
  );
}

export default App;
