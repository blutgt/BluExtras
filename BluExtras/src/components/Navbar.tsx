import React from 'react';
import { Link } from 'react-router-dom';
import { User, Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const gameServices = [
    'Boosting',
    'Coaching',
    'Power Leveling'
  ];

  const gameAccounts = [
    'League of Legends',
    'World of Warcraft',
    'Valorant'
  ];

  return (
    <nav className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://i.postimg.cc/QMrQc3hY/blogo.png" alt="BluExtras" className="w-8 h-8" />
              <span className="text-xl font-bold">BluExtras</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="group relative">
                <button className="flex items-center space-x-1 py-2">
                  <span>Game Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="nav-dropdown">
                  {gameServices.map((service) => (
                    <Link
                      key={service}
                      to={`/products?category=${service}`}
                      className="block px-4 py-2 hover:bg-primary text-white"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="group relative">
                <button className="flex items-center space-x-1 py-2">
                  <span>Game Accounts</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="nav-dropdown">
                  {gameAccounts.map((game) => (
                    <Link
                      key={game}
                      to={`/products?category=${game}`}
                      className="block px-4 py-2 hover:bg-primary text-white"
                    >
                      {game}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/sell" className="hover:text-primary transition-colors">
                Sell
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/auth"
              className="flex items-center space-x-1 hover:text-primary transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Sign In</span>
            </Link>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;