import React from 'react';
import { Upload, DollarSign, Tag, Info } from 'lucide-react';

const Sell = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">List Your Product</h1>
      
      <form className="space-y-6">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5 text-primary" />
            Product Images
          </h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              multiple
              className="hidden"
              id="product-images"
              accept="image/*"
            />
            <label
              htmlFor="product-images"
              className="cursor-pointer block"
            >
              <div className="text-gray-600">
                <p className="mb-2">Drag and drop your images here</p>
                <p className="text-sm">or click to browse</p>
              </div>
            </label>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            Product Details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Title
              </label>
              <input
                type="text"
                className="w-full rounded-lg border p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter product title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Describe your product"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full rounded-lg border p-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Select category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home & Garden</option>
                  <option value="sports">Sports</option>
                  <option value="collectibles">Collectibles</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Condition
                </label>
                <select className="w-full rounded-lg border p-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Select condition</option>
                  <option value="new">New</option>
                  <option value="like-new">Like New</option>
                  <option value="used">Used</option>
                  <option value="refurbished">Refurbished</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  className="w-full rounded-lg border pl-8 p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                className="w-full rounded-lg border p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="1"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full">
          List Product
        </button>
      </form>
    </div>
  );
};

export default Sell;