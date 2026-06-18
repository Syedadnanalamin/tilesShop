import Image from 'next/image';
import React from 'react';

const ProductDetails = ({ Details }) => {
    const SingleProductDetails = Details[0];

    return (
        <div className='container mx-auto mt-8 px-4'>

            <div className="grid lg:grid-cols-5 gap-8 bg-base-100 shadow-lg rounded-xl p-6">

                {/* Image Section */}
                <div className='lg:col-span-3 '>
                    <Image
                        src={SingleProductDetails.image}
                        alt='productDetailImage'
                        width={800}
                        height={500}
                        className='w-[80%] h-[550px] object-fill rounded-xl'
                    />
                </div>

                {/* Details Section */}
                <div className='lg:col-span-2 flex flex-col justify-between'>

                    <div className='space-y-4'>
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            {SingleProductDetails.title}
                        </h2>

                        <p className='text-lg text-gray-600'>
                            {SingleProductDetails.description}
                        </p>

                        <div className='space-y-2'>
                            <p>
                                <span className='font-semibold'>Creator:</span>{' '}
                                {SingleProductDetails.creator}
                            </p>

                            <p>
                                <span className='font-semibold'>Category:</span>{' '}
                                {SingleProductDetails.category}
                            </p>

                            <p>
                                <span className='font-semibold'>Material:</span>{' '}
                                {SingleProductDetails.material}
                            </p>

                            <p>
                                <span className='font-semibold'>Dimensions:</span>{' '}
                                {SingleProductDetails.dimensions}
                            </p>

                            <p>
                                <span className='font-semibold'>Price:</span>{' '}
                                {SingleProductDetails.currency}
                                {SingleProductDetails.price}
                            </p>

                            <p>
                                <span className='font-semibold'>Availability:</span>{' '}
                                {SingleProductDetails.inStock
                                    ? 'In Stock'
                                    : 'Out of Stock'}
                            </p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 mt-6'>
                        {SingleProductDetails.tags?.map((tag) => (
                            <div
                                key={tag}
                                className="badge badge-accent badge-outline"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;