import React from "react";

const ReviewItem = (props) => {
  const { id, title, price, category } = props.product;
  return (
    <>
      <div className="flex  border-b border-gray-300 mb-4">
        <div className="w-full">
          <h1 className="py-4 text-2xl text-blue-800">{title}</h1>
          <div className="flex w-full">
            <div className="">
              <h1 className="pb-4">By: {category}</h1>
              <h1 className="py-4">$ {price}</h1>
              <button
                className="bg-yellow-400 flex text-gray-900 px-16 my-4 border border-gray-600 rounded-sm"
                type="button"
                onClick={() => props.handelRemoveProduct(id)}
              >
                <span>Remove Product</span>
              </button>
            </div>
            <div className="flex mx-auto">
              <h1>Shipping options</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
