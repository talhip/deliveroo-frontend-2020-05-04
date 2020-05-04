import React from "react";

const Header = ({ logo, restaurant }) => {
  return (
    <div className="container header">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="info">
        <div>
          <h1>{restaurant.restaurant.name}</h1>
          <h2>{restaurant.restaurant.description}</h2>
        </div>
        <img className="meal" alt="meal" src={restaurant.restaurant.picture} />
      </div>
    </div>
  );
};

export default Header;
