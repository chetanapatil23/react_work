import React from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
function About() {
    return (
        <>
            <div className="min-h-screen w-full bg-gradient-to-br from-[#2b0f47] via-[#4b1b7a] to-[#2b0f47] text-white py-20 px-6 md:px-20 relative overflow-hidden">

                {/* Background blur shapes */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-32 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30"></div>

                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center text-4xl md:text-5xl font-bold mb-16"git add
                >
                    <div className="heading flex justify-center items-center gap-4">
                        <span className="text-purple-300"><FaUser className="mt-2" size={30} /></span>{" "}
                        <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </div>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <p className="text-gray-300 text-lg">
                            MERN Stack Developer experienced in creating dynamic and high-performance
                            web applications. Skilled in building RESTful APIs, connecting NoSQL databases,
                            and implementing secure authentication systems.
                        </p>

                        <p className="text-gray-300 text-lg">
                            Passionate about building interactive UIs with React.js, Tailwind CSS,
                            and state management using Redux. Focused on writing clean, scalable,
                            and maintainable code.
                        </p>
                        <div className="flex flex-wrap gap-6 mt-4 text-gray-300">
                            <div className="flex items-center gap-2">
                                <IoLocationOutline className="text-purple-300 text-lg" />
                                Ahmedabad, Gujarat
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { name: "JavaScript", percent: "80%", icon: <IoLogoJavascript /> },
                                { name: "React.js", percent: "70%", icon: <FaReact /> },
                                { name: "MySql", percent: "70%", icon: <SiMysql /> },
                                { name: "TailwindCSS", percent: "70%", icon: <SiTailwindcss /> },
                                { name: "Framer Motion", percent: "60%", icon: <TbBrandFramerMotion /> },
                                { name: "Github", percent: "60%", icon: <FaGithub /> },

                            ].map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-2 text-lg">
                                        <span className="text-xl text-purple-300">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>

                                    <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.percent }}
                                            transition={{ duration: 1.3 }}
                                            className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                                        ></motion.div>
                                    </div>
                                </motion.div>

                            ))}

                        </div>


                    </motion.div>
                </div>
            </div>
        </>
    )
}
export default About;