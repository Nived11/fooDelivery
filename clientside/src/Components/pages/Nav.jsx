import React, { useState, useEffect, useRef } from 'react';
import "../css/Nav.css";
import { Search, Tag, HelpCircle, User, ShoppingCart } from 'lucide-react';

function Nav() {
  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  // Handle click outside to close search
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    }

    // Add event listener when search is active
    if (searchActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchActive]);

  return (
    <nav>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">F</div>
          <span className="logo-text">FoodDelight</span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          {/* Search Bar */}
          <div 
            ref={searchRef}
            className={`search-container ${searchActive ? 'active' : ''}`}
            onClick={!searchActive ? toggleSearch : undefined}
          >
            <Search size={20} />
            {searchActive ? (
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search for food..."
                autoFocus
              />
            ) : (
              <span className="search-text">Search</span>
            )}
          </div>
          
          {/* Other Nav Items */}
          <div className="nav-item">
            <Tag size={20} />
            <span>Offers</span>
          </div>
          
          <div className="nav-item">
            <HelpCircle size={20} />
            <span>Help</span>
          </div>
          
          <div className="nav-item">
            <User size={20} />
            <span>Sign In</span>
          </div>
          
          <div className="nav-item cart">
            <ShoppingCart size={20} />
            <span>Cart</span>
            <div className="cart-count">0</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;