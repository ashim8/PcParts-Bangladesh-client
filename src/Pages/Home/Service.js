import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const { _id,name, img, description, minimumQuantity, availableQuantity, price} = service;
    const navigate = useNavigate();

    const navigateToProductDetail = id =>{
        navigate(`/product/${id}`);
    }
    return (
        // <div className='service'>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
               <img src={img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2>Name: {name}</h2>
            <p><small>{description}</small></p>
            <p>Price: {price}</p>
            <p>MinQuantity: {minimumQuantity}</p>
            <p>MaxQuantity: {availableQuantity}</p>
       
        <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary'>Order</button>
        </div>
    </div>
);

};

export default Service;