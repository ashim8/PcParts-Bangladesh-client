import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Service from "../../Pages/Home/Service";

const Services = () => {

    const [services, setService] = useState([]);
    // const navigate = useNavigate();
    // const navigateToManage = () =>{
    //   navigate('/manage');
    // }

    useEffect( ()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setService(data));
        //.then(data=>setData(data.slice(0,6))
    }, [services])

    return (
        <div className='my-28'>
           <div className='text-center'>
              <h3 className='text-primary  text-xl font-bold uppercase'>Our Products</h3>
                <h2 className='text-4xl'>Products We Have</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                  services.map(service =><Service
                     key={service._id}
                     service={service}
                  ></Service>)
              }
            </div>
       </div>
    );
};

export default Services;