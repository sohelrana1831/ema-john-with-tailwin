import { ShoppingCartIcon } from "@heroicons/react/outline";
import React from "react";
import Rating from "react-rating";
const Product = (props) => {
  const { image, title, price, category } = props.product;
  const { rate, count } = props.product.rating;
  return (
    <>
      <div className="flex  border-b border-gray-300 mb-4">
        <div className="mr-20">
          <img src={image} alt={title} className="w-20" />
        </div>
        <div className="w-full">
          <h1 className="py-4 text-2xl text-blue-800">{title}</h1>
          <div className="flex w-full">
            <div className="">
              <h1 className="pb-4">By: {category}</h1>
              <h1 className="py-4">$ {price}</h1>
              <h1>only 50 left in stock - order soon</h1>
              <button
                className="bg-yellow-400 flex text-gray-900 px-16 my-4 border border-gray-600 rounded-sm"
                type="button"
                onClick={() => props.handelAddToCart(props.product)}
              >
                <ShoppingCartIcon className="w-6" /> <span>Add to cart</span>
              </button>
            </div>
            <div className="flex mx-auto">
              <Rating
                className="text-yellow-400"
                initialRating={rate}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
              />
              <h1>({count})</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
