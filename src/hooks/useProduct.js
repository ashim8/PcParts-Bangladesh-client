import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const useProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    console.log(id);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return [product];
    
};

export default useProduct;
