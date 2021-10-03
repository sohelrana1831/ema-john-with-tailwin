import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakeDb";

const useCart = (products) => {
    const [cart, setCart] = useState();
    useEffect(() => {
        if (products?.length > 0) {
            const getLocal = getStoredCart();
            let cartData = [];

            for (const key in getLocal) {
                const addedCart = products.find(product => product.id === parseInt(key))
                if (addedCart) {
                    const quantity = getLocal[key]
                    addedCart.quantity = quantity;
                    cartData.push(addedCart)
                }
            }
            setCart(cartData)
        }
    }, [products])

    return [cart, setCart]
}

export default useCart;