import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import ContactInfoCard from "@/components/common/contact/ContactInfoCard";

const ContactInfoSection = () => {
  return (
    <section className="px-6 pb-24">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        <ContactInfoCard
          icon={Mail}
          title="Email Us"
          value="support@lukahomeessentials.com"
        />

        <ContactInfoCard
          icon={Phone}
          title="Call Us"
          value="+91 98765 43210"
        />

        <ContactInfoCard
          icon={MapPin}
          title="Visit Us"
          value="London • Hyderabad • Guangzhou"
        />
      </div>
    </section>
  );
};

export default ContactInfoSection;