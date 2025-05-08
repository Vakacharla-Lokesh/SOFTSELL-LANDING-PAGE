import React from "react";

const WhyChooseUs = () => {
  const points = [
    "Fast payouts",
    "Verified buyers",
    "Top market rates",
    "Safe transactions",
  ];
  return (
    <section className="py-16 px-4 text-center">
      <h3 className="text-3xl font-semibold mb-8">Why Choose Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((point, i) => (
          <div key={i} className="p-6 bg-gray-100 dark:bg-gray-700 rounded shadow">
            <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;