import React from 'react';
import "../css/Home.css";
import Nav from './Nav.jsx';

function Home() {
  return (
    <div className="home-container">
      <Nav />
      <div className="content">
        {/* Your home content will go here */}
        <div className="placeholder-content">
          <h1>Welcome to FoodDelight</h1>
          <p>Your favorite dishes, delivered fast</p>
        </div>
      </div>
    </div>
  );
}

export default Home;