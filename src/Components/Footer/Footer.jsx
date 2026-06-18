import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#2a3c50] text-white mt-16">
            <div className="container mx-auto px-6 py-12">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* Brand Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            Tiles Gallery
                        </h2>

                        <p className="text-gray-300">
                            Discover premium ceramic, marble, stone, and wood-inspired
                            tiles to transform your living spaces with style and elegance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-green-300">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/alltiles" className="hover:text-green-300">
                                    All Tiles
                                </Link>
                            </li>

                            <li>
                                <Link href="/my-profile" className="hover:text-green-300">
                                    My Profile
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Contact Us
                        </h3>

                        <p>Email: support@tilesgallery.com</p>
                        <p>Phone: +880 1234-567890</p>
                        <p>Location: Dhaka, Bangladesh</p>

                        <div className="flex gap-4 mt-5 text-xl">
                            <a href="#" className="hover:text-green-300">
                                <FaFacebookF />
                            </a>

                            <a href="#" className="hover:text-green-300">
                                <FaInstagram />
                            </a>

                            <a href="#" className="hover:text-green-300">
                                <FaLinkedinIn />
                            </a>

                            <a href="#" className="hover:text-green-300">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-600 mt-10 pt-5 text-center text-gray-300">
                    © {new Date().getFullYear()} Tiles Gallery. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;