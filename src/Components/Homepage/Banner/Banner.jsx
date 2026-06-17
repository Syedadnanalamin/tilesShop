import React from 'react';
import banner from "@/assets/banner.png";
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='mt-2'>
            <div className="card bg-base-100 image-full w-[90%] h-[75vh] mx-auto shadow-sm">
                <figure>

                    <Image src={banner} alt='banner' fill ></Image>
                </figure>
                <div className="card-body justify-center items-center gap-5">
                    <h2 className="text-5xl">Discover Your Perfect Aesthetic</h2>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Browse Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;