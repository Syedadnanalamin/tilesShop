import { featuredCard } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cards = ({ cardDetails }) => {



    return (
        <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
                <Image src={cardDetails.image} alt={cardDetails.title} height={300} width={400}></Image>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{cardDetails.title}</h2>
                <p>{cardDetails.description}</p>
                <div className="card-actions">
                    <Link href={`/details/${cardDetails.id}`}>
                        <button className="btn btn-primary">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Cards;