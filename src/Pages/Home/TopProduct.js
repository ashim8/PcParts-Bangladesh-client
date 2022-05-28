import React from 'react';

import ssd from '../../assets/ssd.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const TopProduct = () => {
    return (
        
     <div>
         <h3 className='text-center text-4xl'>Top sell product: </h3>
         <div className='grid grid-cols-2 gap-2 mt-3'>
         <div className='w-80'>
                <img  src={ssd} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'>Product Name: SSD</h3>
                <p className='text-primary pb-5'>A solid-state drive is a solid-state storage device that uses integrated circuit assemblies to store data persistently, typically using flash memory, and functioning as secondary storage in the hierarchy of computer storage. It is also sometimes called a semiconductor storage device</p>
                <PrimaryButton>Know More...</PrimaryButton>
            </div>
      </div>
         </div>
       
         
    );
};

export default TopProduct;