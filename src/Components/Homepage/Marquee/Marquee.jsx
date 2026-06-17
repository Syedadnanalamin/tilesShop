import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
    return (
        <div className='flex  px-90'>

            <button className='btn btn-accent'>New Arrivals</button>
            <Marquee>
                <h1>[Tile Name] | Weekly Feature: Modern Geometric Patterns | Join the Community</h1>
            </Marquee>
        </div>
    );
};

export default MarqueeSection;