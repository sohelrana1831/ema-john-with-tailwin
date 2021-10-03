import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900 text-white">
      <nav className="container">
        <ul className="flex pt-4 pb-4 text-2xl">
          <Link to="/shop" className="mr-4">
            Shop
          </Link>
          <Link to="/review" className="mr-4">
            Order Review
          </Link>
          <Link to="/manage" className="mr-4">
            Manage Inventory here
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
