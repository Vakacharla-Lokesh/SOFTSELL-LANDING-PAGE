import React from "react";

const Hero = () => (
  <section id="hero" className="relative bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-10 dark:opacity-20">
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-60 h-60 bg-purple-400 rounded-full filter blur-3xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative z-10">
      <div className="md:flex justify-between items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Turn Unused <span className="text-blue-600">Licenses</span> into Cash
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            Fast, safe, and easy software license resale for businesses of all sizes. Recover value from your underutilized assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Sell My Licenses
            </button>
            <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 text-gray-800 dark:text-gray-200 font-medium px-8 py-3 rounded-lg shadow hover:shadow-md transition-all">
              Get a Quote
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500">License Manager</div>
              </div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-100 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-6 bg-gray-100 dark:bg-gray-700 rounded"></div>
                <div className="h-6 bg-gray-100 dark:bg-gray-700 rounded"></div>
                <div className="flex gap-2 mt-6">
                  <div className="h-8 bg-blue-100 dark:bg-blue-900 rounded w-1/3"></div>
                  <div className="h-8 bg-green-100 dark:bg-green-900 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;