import React from "react";
import { Upload, DollarSign, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    { 
      title: "Upload License", 
      icon: <Upload className="w-12 h-12 text-blue-600" />,
      description: "Securely upload your unused software licenses to our platform."
    },
    { 
      title: "Get Valuation", 
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      description: "Our experts analyze and provide you with the best market price." 
    },
    { 
      title: "Get Paid", 
      icon: <CreditCard className="w-12 h-12 text-blue-600" />,
      description: "Receive payment quickly through your preferred payment method."
    },
  ];
  
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-2">Simple Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Our straightforward three-step process makes selling your unused licenses effortless and rewarding.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 dark:bg-blue-900 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-center">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {step.description}
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;