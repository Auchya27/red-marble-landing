import { motion } from "framer-motion";
import clsx from "clsx";
import img1 from "../assets/automation-1.jpg";
const About = () => {
  return (
    <section
      id="about"
      className={clsx(
        "w-full bg-white py-20"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={img1}
            alt="About Red Marble Automation"
            className="w-full max-w-md"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About Red Marble Automation
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            At Red Marble Automation, we specialize in designing and deploying cutting-edge automation solutions that transform the way businesses operate. Our mission is to eliminate repetitive tasks, reduce operational costs, and unlock new levels of efficiency through intelligent automation.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            With a focus on innovation and precision, we integrate RPA, AI, and advanced analytics to streamline workflows and deliver measurable business value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
