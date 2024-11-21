import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      seller: "Tech Store",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Smart Watch Series X",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      seller: "Gadget World",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Professional Camera Kit",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
      seller: "Photo Pro",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Vintage Leather Bag",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&q=80",
      seller: "Fashion Hub",
      rating: 4.6,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-primary font-bold mb-2">${product.price}</p>
              <p className="text-sm text-gray-600 mb-2">Seller: {product.seller}</p>
              <div className="flex items-center mb-4">
                <div className="flex-grow">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-${
                          i < Math.floor(product.rating) ? 'yellow' : 'gray'
                        }-400 text-lg`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-1 text-sm text-gray-600">
                      ({product.rating})
                    </span>
                  </div>
                </div>
              </div>
              <button className="btn-primary w-full">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;