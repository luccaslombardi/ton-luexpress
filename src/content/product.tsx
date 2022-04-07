import React, { useEffect, useState } from "react";
import api from "../services/api";

interface productData {
    id: number;
    title: string,
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

function Products() {
    const [products, setProducts] = useState<productData[]>([])


    useEffect(() => {
        api
            .get("/products")
            .then(res => {
                setProducts(res.data)
                console.log("Segundo log ", products)
            })
            .catch(err => console.log(err))
    }, [])

    console.log("terceiro log: ", products)
    return (
        <>
            <p>Até aqui tudo certo</p>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <img src={product.image} alt="" width={100}/>
                        <p>{product.title}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Products


