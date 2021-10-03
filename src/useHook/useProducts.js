import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        axios({
                method: "GET",
                baseURL: "https://fakestoreapi.com",
                url: "/products",
            })
            .then((products) => {
                setProducts(products.data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    return [loading, products]

}

export default useProducts;