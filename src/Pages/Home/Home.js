import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Custom1 from './Custom1';
import Custom2 from './Custom2';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Custom1></Custom1>
            <Custom2></Custom2>
        </div>
    );
};

export default Home;