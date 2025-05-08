import React from "react";

const Testimonials = () => (
  <section className="py-16 bg-blue-50 dark:bg-gray-800 px-4 text-center">
    <h3 className="text-3xl font-semibold mb-8">What Our Clients Say</h3>
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      <blockquote className="bg-white dark:bg-gray-700 p-6 rounded shadow w-80">
        <p>"SoftSell made it so easy to sell our unused licenses. Highly recommend!"</p>
        <footer className="mt-4">— Alice, CTO at TechCo</footer>
      </blockquote>
      <blockquote className="bg-white dark:bg-gray-700 p-6 rounded shadow w-80">
        <p>"Quick, efficient, and great value. Will use again."</p>
        <footer className="mt-4">— Bob, IT Lead at CloudWare</footer>
      </blockquote>
    </div>
  </section>
);

export default Testimonials;