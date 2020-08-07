import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Coverage from '../components/Coverage';
import Ride from '../components/Ride';

function Home() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Coverage />
            <Ride />
        </div>
    )
};

export default Home;