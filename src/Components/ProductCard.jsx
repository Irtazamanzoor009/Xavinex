import React from 'react';

const ProductCard = ({ title, products }) => {
  return (
    <div className="p-4 rounded-lg shadow bg-white flex-1 min-w-[250px]">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {products.map((item, idx) => (
        <div key={idx} className="mb-4">
          <div className="flex justify-between text-sm">
            <span>{item.name}</span>
            <span>{item.sold} Sold</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div
              className="h-full bg-yellow-500 rounded"
              style={{ width: `${item.sold * 8}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
