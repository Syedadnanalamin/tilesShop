import Cards from '@/Components/Homepage/Featured/cards/Cards';
import { featuredCard } from '@/lib/api';
import ProductDetails from "@/Components/ProductDetails/ProductDetails";

import React from 'react';

const TilesDetailspage = async ({ params }) => {
    const { id } = await params;
    const featuredProducts = await featuredCard()
    const Details = featuredProducts.filter((Product) => Product.id == id)
    return (
        <div>
            <ProductDetails Details={Details}></ProductDetails>
        </div>
    );
};

export default TilesDetailspage;