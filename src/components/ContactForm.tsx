import { motion } from "framer-motion";
import clsx from "clsx";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className={clsx("w-full bg-gray-50 py-20")}
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8"
        >
          Get in Touch
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6 bg-white shadow-md rounded-2xl p-8"
          onSubmit={(e) => {
            e.preventDefault();
            // Add EmailJS or Formspree logic here
            alert("Form submitted!");
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={5}
              required
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
