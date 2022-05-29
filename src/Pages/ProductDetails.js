import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    // const { minimumQuantity, availableQuantity, price} = product;
    const handleQuantity = () => {
        
        if(product.price> product.minimumQuantity || product.price <product.availableQuantity){
            console.error("cannot proceed");
        }

    }

    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [id])
    return (
        <div>
         
            <h2>Name: {product.name}</h2>
            <h2>Description: {product.description}</h2>
            <h2>Price: {product.price}</h2>
            <h2>MinimumQuantity: {product.minimumQuantity}</h2>
            <h2>AvailableQuantity: {product.availableQuantity}</h2>
            <input type="number" placeholder='Quantity' />
            {/* <input type="submit" value="" placeholder='Quantity' /> */}
            <button onSubmit={handleQuantity}>Proceed</button>

        </div>
    );
};

export default ProductDetails;
