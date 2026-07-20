import { useState } from "react";
import { motion } from "framer-motion";

import ContactInput from "@/components/common/contact/ContactInput";

const ContactFormSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `New Contact Inquiry

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    const whatsappUrl = `https://wa.me/919866967897?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="px-6 pb-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.6] p-8 backdrop-blur-2xl shadow-[0_30px_100px_rgba(15,23,42,0.08)] md:p-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-slate-950">
              Start A Conversation
            </h2>

            <p className="mt-6 leading-[2] text-slate-600">
              We respond to partnership, collaboration, media, and customer
              inquiries with care and speed.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <ContactInput
              label="Full Name"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />

            <ContactInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <ContactInput
              label="Message"
              textarea
              placeholder="Tell us about your inquiry..."
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                w-full
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-8
                py-4
                font-bold
                text-white
                shadow-[0_20px_60px_rgba(34,211,238,0.35)]
              "
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;