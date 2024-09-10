import React, { useState } from 'react';

const ProductPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics', image: '/images/laptop.jpg' },
    { id: 2, name: 'Book', price: 15, category: 'Books', image: '/images/books.jpg' },
    { id: 3, name: 'T-shirt', price: 25, category: 'Clothing', image: '/images/t-shirt.jpg' },
    { id: 4, name: 'Smartphone', price: 699, category: 'Electronics', image: '/images/smart phone.jpg' },
    { id: 5, name: 'Novel', price: 20, category: 'Books', image: '/images/novel.jpg' },
    { id: 6, name: 'Jeans', price: 40, category: 'Clothing', image: '/images/jeans.jpg' },
  ]);

  const [filters, setFilters] = useState({ category: '' });
  const [sortOption, setSortOption] = useState('default');

  const filteredProducts = products.filter(product =>
    filters.category ? product.category === filters.category : true
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:justify-between mb-4">
        <div className="flex flex-col md:flex-row mb-4">
          <select
            onChange={(e) => setFilters({ category: e.target.value })}
            className="mb-2 md:mb-0 md:mr-4 p-2 border border-gray-300 rounded"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row">
          <select
            onChange={(e) => setSortOption(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="default">Default Sorting</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map(product => (
          <div key={product.id} className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-gray-500">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
