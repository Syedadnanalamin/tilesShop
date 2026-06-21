import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center px-4">
            <div className="text-center max-w-xl">
                <h1 className="text-8xl md:text-9xl font-extrabold text-[#2a3c50]">
                    404
                </h1>

                <h2 className="text-3xl font-bold mt-4 text-gray-800">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mt-4">
                    Sorry, the page you're looking for doesn't exist or has
                    been moved.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <Link
                        href="/"
                        className="btn bg-[#2a3c50] hover:bg-[#1d2b3a] text-white border-none"
                    >
                        Go Home
                    </Link>

                    <Link
                        href="/alltiles"
                        className="btn btn-outline"
                    >
                        Browse Tiles
                    </Link>
                </div>

                <div className="mt-10 text-6xl">
                    🏠
                </div>
            </div>
        </div>
    );
}