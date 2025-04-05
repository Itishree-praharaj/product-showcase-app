import React, { useState } from 'react';
import ToggleView from './components/ToggleView';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('table');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddOrEdit = (product) => {
    if (editingProduct) {
      setProducts(prev => prev.map(p => p.id === product.id ? product : p));
      setEditingProduct(null);
    } else {
      setProducts(prev => [...prev, { ...product, id: Date.now() }]);
    }
  };

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const filteredProducts = products.filter(product =>
    Object.values(product).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">🛒 Grocery Product Showcase</h1>
        
        <ProductForm onSubmit={handleAddOrEdit} editingProduct={editingProduct} />
        
        <div className="flex flex-col sm:flex-row justify-between items-center my-6 gap-4">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ToggleView view={view} setView={setView} />
        </div>
        
        <ProductList
          products={filteredProducts}
          view={view}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;