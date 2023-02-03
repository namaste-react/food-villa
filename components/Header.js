import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
          alt="Swiggy"
        />
      </Link>
      <div className="items">
        <Link to="/offers">
          <li className="item">Offers</li>
        </Link>
        <Link to="/signin">
          <li className="item">Sign in</li>
        </Link>
        <Link to="/about">
          <li className="item">About</li>
        </Link>
        <Link to="cart">
          <li className="item">Cart</li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
