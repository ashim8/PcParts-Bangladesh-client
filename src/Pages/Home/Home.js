import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Services from './Services';
import Testimonials from './Testimonials';
import BusinessCard from './BusinessCard';
import TopProduct from './TopProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TopProduct></TopProduct>
            <Testimonials></Testimonials>
            <BusinessCard></BusinessCard>
            <Footer></Footer>
        </div>
    );
};

export default Home;