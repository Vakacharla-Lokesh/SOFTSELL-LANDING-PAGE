import React from "react";
import { Clock, ShieldCheck, BarChart, Lock } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    {
      title: "Fast Payouts",
      description: "Get paid within 24-48 hours of license verification",
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "Verified Buyers",
      description: "We work only with legitimate enterprise clients",
      icon: <ShieldCheck className="h-8 w-8" />
    },
    {
      title: "Top Market Rates",
      description: "Guaranteed best prices for your unused licenses",
      icon: <BarChart className="h-8 w-8" />
    },
    {
      title: "Safe Transactions",
      description: "End-to-end encrypted and compliant transfers",
      icon: <Lock className="h-8 w-8" />
    },
  ];
  
  return (
    <section id="why-choose-us" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-2">Our Advantages</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            SoftSell provides the most secure, efficient, and profitable way to sell your unused software licenses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6 transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                {point.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3">{point.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{point.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 border border-blue-200 dark:border-blue-800 rounded-full text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30">
            Join over 1,000+ businesses that trust SoftSell
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;