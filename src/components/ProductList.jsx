import React from 'react';
const ProductList = ({ products, view, onDelete, onEdit }) => {
    if (products.length === 0) return <p className="text-center text-gray-500 mt-8">😕 No products found.</p>;
  
    if (view === 'table') {
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border shadow-sm rounded-lg bg-white">
            <thead className="bg-blue-100 text-blue-700">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id} className="border-t hover:bg-blue-50 transition">
                  <td className="px-4 py-3">{p.name}</td>
                  <td className="px-4 py-3">{p.description}</td>
                  <td className="px-4 py-3 font-medium text-green-600">₹{p.price}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button onClick={() => onEdit(p)} className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded">Edit</button>
                    <button onClick={() => onDelete(p.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white border shadow rounded-lg p-4 hover:shadow-md transition">
            <h2 className="text-lg font-bold text-blue-700">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
            <p className="text-green-600 font-semibold mt-2">₹{p.price}</p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => onEdit(p)} className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded">Edit</button>
              <button onClick={() => onDelete(p.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;
  
  
  