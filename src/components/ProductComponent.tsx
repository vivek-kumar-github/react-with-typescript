import { useEffect, useState } from "react";
import { ProductContract } from "../contracts/ProductContract";

export function ProductComponent() {
    const [product, setProduct] = useState<ProductContract>()

    useEffect(() => {
        setProduct({
            Name: "TV",
            Price: 4500.56,
            Stock: true
        })
    }, [])
    return (
        <div>
            <dl>
                <dt>Name</dt>
                <dd>{product?.Name}</dd>
                <dt>Price</dt>
                <dd>{product?.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product?.Stock) ? "Available" : "Out of Stock"}</dd>
            </dl>
        </div>
    )
}