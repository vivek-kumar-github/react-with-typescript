import { useEffect, useState } from "react";
import { ProductContract } from "../contracts/ProductContract";
import  Button  from "@mui/material/Button";

export function ProductComponent() {
    const [product, setProduct] = useState<ProductContract>()

    useEffect(() => {
        setProduct({
            Name: "TV",
            Price: 4500.56,
            Stock: true
        })
    }, [])

    function handleClick() {
        alert("Registered")
    }
    return (
        <div style={{'marginLeft' : '20px'}}>
            <dl>
                <dt>Name</dt>
                <dd>{product?.Name}</dd>
                <dt>Price</dt>
                <dd>{product?.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product?.Stock) ? "Available" : "Out of Stock"}</dd>
            </dl>
            <Button onClick={handleClick} variant="contained" color="primary">Register</Button>
        </div>
    )
}