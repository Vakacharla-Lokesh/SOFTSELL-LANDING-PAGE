import React, { useState } from "react";
import { Send, Check } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    company: "", 
    licenseType: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setForm({ name: "", email: "", company: "", licenseType: "", message: "" });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Info section */}
            <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="mb-8 opacity-90">
                Ready to turn your unused licenses into cash? Contact us today and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="opacity-90">contact@softsell.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="opacity-90">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="opacity-90">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form section */}
            <div className="md:w-3/5 p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full mb-4">
                    <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-xl font-medium text-green-800 dark:text-green-400 mb-2">Message Sent!</h4>
                  <p className="text-green-600 dark:text-green-500">Thank you for contacting us. We'll be in touch shortly.</p>
                </div>
              ) : (
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input 
                        id="name"
                        name="name" 
                        value={form.name} 
                        onChange={handleChange} 
                        placeholder="John Doe" 
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <input 
                        id="email"
                        name="email" 
                        type="email" 
                        value={form.email} 
                        onChange={handleChange} 
                        placeholder="john@example.com" 
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                      <input 
                        id="company"
                        name="company" 
                        value={form.company} 
                        onChange={handleChange} 
                        placeholder="Acme Corp" 
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                      />
                    </div>
                    <div>
                      <label htmlFor="licenseType" className="block text-sm font-medium mb-2">License Type</label>
                      <select 
                        id="licenseType"
                        name="licenseType" 
                        value={form.licenseType} 
                        onChange={handleChange} 
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                      >
                        <option value="">Select License Type</option>
                        <option value="Office">Microsoft Office</option>
                        <option value="Antivirus">Antivirus/Security</option>
                        <option value="Creative">Creative Software</option>
                        <option value="Cloud">Cloud Services</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      value={form.message} 
                      onChange={handleChange} 
                      placeholder="Tell us about your licenses and requirements..." 
                      rows={4} 
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
                    />
                  </div>
                  
                  <div>
                    <button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`w-full md:w-auto px-6 py-3 rounded-lg font-medium flex items-center justify-center transition
                        ${isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;