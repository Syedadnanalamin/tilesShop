import React from "react";
import Cards from "./cards/Cards";
import { featuredCard } from "@/lib/api";

const Featured = async () => {
    const allCardsdetails = await featuredCard();

    return (
        <section className="max-w-7xl mx-auto w-full px-4 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-10">
                Featured Tiles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto">
                {allCardsdetails.map((cardDetails) => (
                    <Cards
                        key={cardDetails.id}
                        cardDetails={cardDetails}
                    />
                ))}
            </div>
        </section>
    );
};

export default Featured;