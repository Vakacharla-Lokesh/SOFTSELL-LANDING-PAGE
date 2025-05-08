import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    { title: "Upload License", icon: "📤" },
    { title: "Get Valuation", icon: "💰" },
    { title: "Get Paid", icon: "🏦" },
  ];
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 text-center">
      <h3 className="text-3xl font-semibold mb-8">How It Works</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-700 p-6 rounded shadow w-60"
          >
            <div className="text-4xl mb-2">{step.icon}</div>
            <h4 className="font-medium">{step.title}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;