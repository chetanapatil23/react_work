
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b0f47] via-[#4b1b7a] to-[#2b0f47] text-white overflow-hidden relative">

    

      {/*CENTER CONTENT */}
      <div className="flex flex-col justify-center items-center text-center min-h-[80vh] px-4">

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent"
        >
          Chetana Patil
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-lg md:text-xl tracking-wider"
        >
          I'M a <span className="text-purple-300">Frontend Developer</span>
        </motion.p>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-gray-300 max-w-xl text-sm md:text-base leading-6"
        >
          Building web applications with React.js, Tailwind CSS and JavaScript.
          Passionate about creating seamless user experiences with modern technologies.
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex gap-4 mt-8 flex-wrap justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full text-sm"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="border border-pink-400 px-6 py-3 rounded-full text-sm"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/*BACKGROUND SHAPES */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-pink-500 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-red-500 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute top-52 right-40 w-20 h-20 bg-indigo-500 rounded-lg rotate-12 blur-xl opacity-40"></div>
      <div className="absolute bottom-20 left-40 w-28 h-28 bg-blue-500 rounded-full blur-2xl opacity-30"></div>

    </div>
  );
}
