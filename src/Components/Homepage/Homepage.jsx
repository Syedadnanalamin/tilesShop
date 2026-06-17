import React from 'react';
import Banner from './Banner/Banner';

import Featured from './Featured/Featured';
import MarqueeSection from './Marquee/Marquee';

const Homepage = () => {
    return (
        <div className='flex flex-col gap-15 container mx-auto'>
            <Banner></Banner>
            <MarqueeSection></MarqueeSection>
            <Featured></Featured>
        </div>
    );
};

export default Homepage;