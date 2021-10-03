import React from "react";
import { useHistory } from "react-router";
import useCart from "../../useHook/useCart";
import { clearTheCart, removeFromDb } from "../../utilities/fakeDb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import useProducts from "./../../useHook/useProducts";

const ReviewOrder = () => {
  const [loading, products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();

  const handelRemoveProduct = (id) => {
    const newCatData = cart?.filter((product) => product.id !== id);
    setCart(newCatData);
    removeFromDb(id);
  };

  const handelPlaceOrder = () => {
    history.push("/place-order");
    setCart([]);
    clearTheCart();
  };

  return (
    <div>
      <div className="container flex">
        <div className="w-3/4 border-r border-gray-300">
          {loading && "Loading..."}
          {cart?.map((product) => (
            <ReviewItem
              handelRemoveProduct={handelRemoveProduct}
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="w1/4">
          {cart && (
            <Cart cart={cart}>
              <button
                onClick={handelPlaceOrder}
                className="bg-yellow-400 px-16 my-4 border border-gray-600 rounded-sm"
              >
                Plase Order
              </button>
            </Cart>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
