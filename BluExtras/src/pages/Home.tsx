import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award } from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "League of Legends - Diamond Account",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80",
    },
    {
      id: 2,
      title: "WoW Mythic+ Boosting",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&q=80",
    },
    {
      id: 3,
      title: "Valorant Radiant Coaching",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&q=80",
    },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Level Up Your Gaming Experience
            </h1>
            <p className="text-xl mb-8">
              Premium game accounts, professional boosting, and expert coaching services.
            </p>
            <Link to="/products" className="btn-primary inline-block">
              Browse Services
            </Link>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Guarantees</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-400">All purchases are protected with escrow service</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-400">24/7 support and full warranty on all services</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Sellers</h3>
              <p className="text-gray-400">All sellers are vetted and verified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Services</h2>
          <Link to="/products" className="text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="card">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-primary font-bold">Starting at ${product.price}</p>
                <button className="btn-primary w-full mt-4">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;