import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <nav className="bg-black/20 backdrop-blur-lg fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-5 z-50">

            <h1 className="text-pink-400 font-bold text-xl">CP</h1>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex gap-8 text-sm text-white">

                <li>
                    <NavLink
                        to="/Hero"
                        className={({ isActive }) =>
                            isActive
                                ? "text-pink-400 border-b-2 border-pink-400 pb-1"
                                : "hover:text-pink-400"
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-pink-400 border-b-2 border-pink-400 pb-1"
                                : "hover:text-white"
                        }
                    >
                        About
                    </NavLink>
                </li>

                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>



            <div
                className="md:hidden text-3xl cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-lg md:hidden"
                >
                    <ul className="flex flex-col items-center py-4 space-y-4 text-white">
                        <li>
                            <NavLink
                                to="/Hero"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-pink-400 border-b-2 border-pink-400 pb-1"
                                        : "hover:text-pink-400"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-pink-400 border-b-2 border-pink-400 pb-1"
                                        : "hover:text-white"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>Experience</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </motion.div>
            )}
        </nav>
    );
}
