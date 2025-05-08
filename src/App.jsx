import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";

const App = () => {
  return (
    <div className="font-sans text-gray-800 bg-white dark:bg-gray-900 dark:text-white relative">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ChatButton />
    </div>
  );
};

export default App;