import React from "react";

const Cart = (props) => {
  const { cart } = props;

  let totalQuantity = 0;
  let totalPrice = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    totalQuantity = totalQuantity + product.quantity;
    const totalReduce = (previousValue, currentValue) =>
      previousValue + currentValue.price;
    totalPrice = cart.reduce(totalReduce, 0);
  }
  const shipping = totalPrice > 0 ? 15 : 0;
  const tax = (totalPrice + shipping) * 0.1;
  const grandTotal = shipping + tax + totalPrice;
  return (
    <div className="fixed">
      <div className="pl-20">
        <h1 className="text-2xl">Order Summary</h1>
        <p className="text-center py-4">Items ordered: {totalQuantity}</p>
      </div>
      <div className="pl-4">
        <table>
          <tbody>
            <tr>
              <td>Items: </td>
              <td> $ {totalPrice.toFixed(2)}</td>
            </tr>

            <tr>
              <td>Shipping & Handling: </td>
              <td> $ {shipping.toFixed(2)}</td>
            </tr>

            <tr>
              <td>Estimated Tax: </td>
              <td> $ {tax.toFixed(2)}</td>
            </tr>

            <tr className="text-red-700 font-bold text-1xl">
              <td>Order Total: </td>
              <td> $ {grandTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
