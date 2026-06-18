import Link from "next/link";
import Image from "next/image";

const Tiles = ({ tiles }) => {
    return (
        <div className="container mx-auto px-4 py-8">

            {/* Search Bar */}
            <div className="mb-8 w-1/2 mx-auto">
                <input
                    type="text"
                    placeholder="Search tiles by title..."
                    className="input input-bordered w-full text-lg"
                />
            </div>

            {/* Tiles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tiles.map((tile) => (
                    <div
                        key={tile.id}
                        className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
                    >
                        <figure className="h-60">
                            <Image
                                src={tile.image}
                                alt={tile.title}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">
                                {tile.title}
                            </h2>

                            <div className="card-actions justify-end">
                                <Link href={`/details/${tile.id}`}>
                                    <button className="btn btn-primary">
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Tiles;