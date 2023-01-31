import { useState } from "react";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
        alt="Swiggy"
      />
      <div className="items">
        <li className="item">Offers</li>
        <li className="item">Sign in</li>
        <li className="item">Cart</li>
      </div>
    </div>
  );
};

export default Header;
