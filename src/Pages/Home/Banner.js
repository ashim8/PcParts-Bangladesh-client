import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
// import chair from '../../assets/images/chair.png';
import cover from '../../assets/co.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={cover} className="max-w-md rounded-lg shadow-2xl" alt='cover'/>
                <div>
                    <h1 className="text-4xl font-bold">Find Your desired product Here!</h1>
                    <p className="py-6">You Can Now Buy Economical And Best Component At PcParts Bangladesh. Shop Online By Browsing Through Our Large Collection Of Components At PcParts Bangladesh.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;