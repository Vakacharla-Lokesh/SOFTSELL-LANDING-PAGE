import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SoftSell made it so easy to sell our unused licenses. The process was transparent and the payment was processed quickly. Highly recommend!",
      name: "Alice Johnson",
      title: "CTO at TechCo",
      image: "/api/placeholder/80/80",
      rating: 5
    },
    {
      quote: "Quick, efficient, and great value. Their team was professional and kept us updated throughout the entire process. Will definitely use again.",
      name: "Bob Smith",
      title: "IT Lead at CloudWare",
      image: "/api/placeholder/80/80",
      rating: 5
    },
    {
      quote: "We recovered 70% of our original license costs with SoftSell. The platform is intuitive and the valuation was fair. Great experience overall.",
      name: "Carol Davis",
      title: "Finance Director at DataSystems",
      image: "/api/placeholder/80/80",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-blue-50 dark:bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-blue-600 font-bold mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Hear from businesses who have successfully sold their unused software licenses through our platform.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop view */}
          <div className="hidden md:flex gap-6 justify-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 max-w-md relative"
              >
                <div className="absolute -top-3 -left-3 bg-blue-600 text-white p-2 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7H6C4.89543 7 4 7.89543 4 9V15C4 16.1046 4.89543 17 6 17H10C11.1046 17 12 16.1046 12 15V9C12 7.89543 11.1046 7 10 7Z" fill="currentColor" />
                    <path d="M18 7H14C12.8954 7 12 7.89543 12 9V15C12 16.1046 12.8954 17 14 17H18C19.1046 17 20 16.1046 20 15V9C20 7.89543 19.1046 7 18 7Z" fill="currentColor" />
                  </svg>
                </div>
                
                <div className="flex mt-4 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile view */}
          <div className="md:hidden">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 max-w-md mx-auto relative">
              <div className="absolute -top-3 -left-3 bg-blue-600 text-white p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 7H6C4.89543 7 4 7.89543 4 9V15C4 16.1046 4.89543 17 6 17H10C11.1046 17 12 16.1046 12 15V9C12 7.89543 11.1046 7 10 7Z" fill="currentColor" />
                  <path d="M18 7H14C12.8954 7 12 7.89543 12 9V15C12 16.1046 12.8954 17 14 17H18C19.1046 17 20 16.1046 20 15V9C20 7.89543 19.1046 7 18 7Z" fill="currentColor" />
                </svg>
              </div>
              
              <div className="flex mt-4 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonials[currentIndex].quote}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;