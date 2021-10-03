import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakeDb";
import Cart from "../Cart/Cart";
import useProducts from "./../../useHook/useProducts";
import Product from "./../Product/Product";

const Products = () => {
  const [loading, products, displaySerchProduct, setDisplaySerchProduct] =
    useProducts();
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
  const handelSearch = (e) => {
    const searchText = e.target.value;
    const matchSerach = products?.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplaySerchProduct(matchSerach);
  };
  console.log(displaySerchProduct);
  return (
    <>
      <div className="bg-gray-600">
        <div className="container">
          <input
            onChange={handelSearch}
            className="w-full p-2 mt-2 mb-4 text-gray-800 font-bold"
            type="text"
            placeholder="Type here to search"
          />
        </div>
      </div>
      <div className="container flex">
        <div className="w-3/4 border-r border-gray-300">
          {loading && "Loading..."}
          {!!displaySerchProduct && displaySerchProduct.length > 0 ? (
            displaySerchProduct.map((product) => (
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
    </>
  );
};

export default Products;
