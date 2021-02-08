import React from 'react';
import './../App.css';
import CardContainer from './../components/Card/CardContainer';
import HeroSection from './../components/HeroSection/HeroSection';
import Footer from './../components/Footer/Footer'

function Home() {
    return (
        <>
            <HeroSection/>
            <CardContainer/>
            <Footer/>
        </>
    )
}

export default Home
