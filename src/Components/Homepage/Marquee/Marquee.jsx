import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
    return (
        <div className='flex  lg:px-90 w-full mx-auto pl-10  '>

            <button className='btn btn-accent'>New Arrivals</button>
            <Marquee>
                <h1>[Tile Name] | Weekly Feature: Modern Geometric Patterns | Join the Community</h1>
            </Marquee>
        </div>
    );
};

export default MarqueeSection;