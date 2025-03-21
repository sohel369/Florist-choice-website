"use client";
import React, { useState } from 'react';

function MainComponent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Spring Delight Bouquet",
      price: 49.99,
      image: "/spring-bouquet.jpg",
      category: "seasonal",
    },
    // ... other products
  ]);

  const categories = [
    { id: "all", name: "All Flowers" },
    { id: "seasonal", name: "Seasonal" },
    { id: "roses", name: "Roses" },
    { id: "tropical", name: "Tropical" },
    { id: "lilies", name: "Lilies" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    // Add cart functionality here
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-inter text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Our Collection
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[#FF69B4] text-white transform scale-105"
                  : "bg-[#FFF0F5] dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#FFB6C1]"
              } font-inter relative overflow-hidden`}
            >
              <span className="relative z-10">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-inter text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="font-inter text-[#FF69B4] text-xl font-bold mb-4">
                  ${product.price}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-[#FF69B4] hover:bg-[#FF1493] text-white font-inter py-2 rounded-lg transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="font-inter text-gray-600 dark:text-gray-300 text-xl">
              No products found in this category
            </p>
          </div>
        )}
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .grid > div {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;