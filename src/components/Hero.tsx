import { motion } from "framer-motion";
import clsx from "clsx";
import hero from "../assets/hero-2.svg";
const Hero = () => {
  return (
    <section
      className={clsx(
        "w-full min-h-screen flex items-center justify-center",
        "bg-white text-gray-900"
      )}
    >
      <div className="max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Automate with Precision.  
            <span className="text-red-600 block">Accelerate with Intelligence.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Red Marble Automation empowers businesses with cutting-edge automation solutions for growth, speed, and precision.
          </p>
           <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 text-white bg-red-600 rounded-xl text-sm font-medium hover:bg-red-700 transition"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="px-6 py-3 text-red-600 border border-red-600 rounded-xl text-sm font-medium hover:bg-red-50 transition"
            >
              Know More
            </a>
          </div>
        </motion.div>

        {/* Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={hero}
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
