import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert("Form submitted! (frontend only)");
  };

  return (
    <section className="py-16 px-4 text-center">
      <h3 className="text-3xl font-semibold mb-8">Contact Us</h3>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto grid gap-4 text-left"
      >
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="p-2 border rounded" />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required className="p-2 border rounded" />
        <select name="type" value={form.type} onChange={handleChange} required className="p-2 border rounded">
          <option value="">Select License Type</option>
          <option value="Office">Office</option>
          <option value="Antivirus">Antivirus</option>
          <option value="Cloud">Cloud</option>
        </select>
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="p-2 border rounded" rows={4} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;