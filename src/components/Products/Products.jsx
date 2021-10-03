import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakeDb";
import Cart from "../Cart/Cart";
import useProducts from "./../../useHook/useProducts";
import Product from "./../Product/Product";

const Products = () => {
  const [loading, products] = useProducts();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (products?.length) {
      const cartData = getStoredCart();

      const storeCart = [];
      for (const key in cartData) {
        const addedProduct = products.find(
          (product) => product.id === parseInt(key)
        );
        if (addedProduct) {
          const quantity = cartData[key];
          addedProduct.quantity = quantity;
          storeCart.push(addedProduct);
        }
      }

      setCart(storeCart);
    }
  }, [products]);

  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);

    //add product id in localStorage
    addToDb(product.id);
  };
  return (
    <div className="container flex">
      <div className="w-3/4 border-r border-gray-300">
        {loading && "Loading..."}
        {!!products && products.length > 0 ? (
          products.map((product) => (
            <Product
              handelAddToCart={handelAddToCart}
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>API did not provided any product, try again.</p>
        )}
      </div>
      <div className="w1/4">
        <Cart cart={cart}>
          <Link
            to="/review"
            className="bg-yellow-400 px-16 my-4 border border-gray-600 rounded-sm"
          >
            Review your order
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Products;
