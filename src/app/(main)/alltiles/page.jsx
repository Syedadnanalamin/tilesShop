import Tiles from "@/Components/Alltiles/tiles";
import { featuredCard } from "@/lib/api";


const AllTilesPage = async () => {
    const tiles = await featuredCard();

    return (
        <div className="min-h-screen bg-slate-50 mt-4">

            {/* Hero Section */}
            <div className="bg-[#2a3c50] text-white py-16">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-5xl font-bold mb-4">
                        Tiles Gallery
                    </h1>

                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        Explore our collection of premium ceramic,
                        marble, stone and wood-inspired tiles for
                        creating beautiful interiors.
                    </p>
                </div>
            </div>

            <Tiles tiles={tiles}></Tiles>

        </div>
    );
};

export default AllTilesPage;