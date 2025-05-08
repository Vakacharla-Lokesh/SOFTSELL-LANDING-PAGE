import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="font-sans text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
        <ChatButton />
      </div>
    </ThemeProvider>
  );
};

export default App;