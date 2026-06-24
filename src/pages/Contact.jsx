import ContactHeroSection from "@/components/sections/contact/ContactHeroSection";

import ContactInfoSection from "@/components/sections/contact/ContactInfoSection";

import ContactFormSection from "@/components/sections/contact/ContactFormSection";

import ContactCTASection from "@/components/sections/contact/ContactCTASection";

const Contact = () => {
  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[#f4f7fb]
      "
    >
      <ContactHeroSection />

      <ContactInfoSection />

      <ContactFormSection />

      <ContactCTASection />
    </main>
  );
};

export default Contact;