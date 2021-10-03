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
        <input
          className="w-full p-2 mt-2 mb-4 text-gray-800 font-bold"
          type="text"
          placeholder="Type here to search"
        />
      </nav>
    </div>
  );
};

export default Header;
