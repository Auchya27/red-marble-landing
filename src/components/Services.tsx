import { motion } from "framer-motion";
import clsx from "clsx";
import { Cpu, Bot, Workflow } from "lucide-react";

const services = [
  {
    title: "Process Automation",
    description:
      "Streamline repetitive tasks and improve operational efficiency with custom automation workflows.Streamline repetitive tasks and improve operational efficiency with custom automation workflows",
    icon: Workflow,
  },
  {
    title: "RPA Integration",
    description:
      "Seamless integration with leading Robotic Process Automation tools to optimize your business processes.Streamline repetitive tasks and improve operational efficiency with custom automation workflows",
    icon: Bot,
  },
  {
    title: "AI-Powered Insights",
    description:
      "Leverage AI to gain actionable insights and enhance decision-making across your organization.Streamline repetitive tasks and improve operational efficiency with custom automation workflows",
    icon: Cpu,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className={clsx(
        "bg-gray-50 py-20 w-full"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          Our Services
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Empower your business with intelligent automation solutions tailored to your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={clsx(
                  "bg-white rounded-2xl shadow-md p-6 text-left",
                  "hover:shadow-lg transition-shadow"
                )}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-xl mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
