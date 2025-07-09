import React, { useState } from 'react';
import ProductCard from './Components/ProductCard';
import SalesChart from './Components/SalesChart';

const allProducts = [
  { name: 'Air Pods Pro', sold: 12, platform: 'Mobile' },
  { name: 'Nike Dunk Low', sold: 8, platform: 'Web' },
  { name: 'Apple Watch', sold: 5, platform: 'Desktop' },
  { name: 'Chanel Perfume', sold: 3, platform: 'Mobile' },
];

function App() {
  const [timeRange, setTimeRange] = useState('Last 7 Days');
  const [platform, setPlatform] = useState('All Platforms');


  const filteredProducts = allProducts.filter((product) => {
    if (platform === 'All Platforms') return true;
    return product.platform === platform;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6 justify-end">
      <div className='flex justify-end w-full mb-6'>

        <div className="flex gap-4 ">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="p-2 pr-6 border border-gray-300 rounded-md bg-white text-sm"
          >
            <option value="Last 7 Days">Last 7 Days</option>
            <option value="Last 30 Days">Last 30 Days</option>
            <option value="Last Year">Last Year</option>
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
        <ProductCard title="Top Selling Products" products={filteredProducts} />
        <ProductCard title="Fastest Selling Products" products={filteredProducts} />
      </div>
      <SalesChart />
    </div>
  );
}

export default App;
