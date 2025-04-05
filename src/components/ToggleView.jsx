import React from 'react';
const ToggleView = ({ view, setView }) => {
    return (
      <div className="inline-flex shadow-md rounded-md overflow-hidden">
        <button
          className={`px-4 py-2 font-medium ${view === 'table' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} transition duration-200`}
          onClick={() => setView('table')}
        >
          📋 Table
        </button>
        <button
          className={`px-4 py-2 font-medium ${view === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} transition duration-200`}
          onClick={() => setView('grid')}
        >
          🧱 Grid
        </button>
      </div>
    );
  };
  
  export default ToggleView
  
  