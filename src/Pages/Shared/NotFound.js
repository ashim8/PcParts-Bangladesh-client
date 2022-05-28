import React from 'react';
import notfound from '../../assets/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <h3>Sorry! You are in the wrong page!</h3>
             <img className='w-80' src={notfound} alt="" />
        </div>
    );
};

export default NotFound; 