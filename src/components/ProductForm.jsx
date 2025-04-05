import React, { useState,useEffect } from 'react';

const ProductForm = ({ onSubmit, editingProduct }) => {
    const [product, setProduct] = useState({ name: '', description: '', price: '' });
  
    useEffect(() => {
      if (editingProduct) setProduct(editingProduct);
    }, [editingProduct]);
  
    const handleChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!product.name || !product.description || !product.price) return;
      onSubmit({ ...product });
      setProduct({ name: '', description: '', price: '' });
    };
  
    return (
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="grid sm:grid-cols-4 gap-4">
          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition">
            {editingProduct ? 'Update ✅' : 'Add ➕'}
          </button>
        </div>
      </form>
    );
  };
  
  export default ProductForm;