import LegalLayout from "../../components/legal/LegalLayout";
import ContactInformation from "../../components/common/ContactInformation";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "introduction",
      label: "Introduction",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Introduction  
          </h2>

          <p className="text-gray-700 leading-relaxed">
            At <strong>Luka Pods</strong>, we respect your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, store, and safeguard your
            information when you visit our website, purchase our detergent pod
            products, or interact with our services.
          </p>

          <p className="text-gray-700 leading-relaxed mt-3">
            By using our website, you agree to the collection and use of your
            information in accordance with this Privacy Policy.
          </p>
        </>
      ),
    },

    {
      id: "information",
      label: "Information We Collect",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Information We Collect
          </h2>

          <p className="text-gray-700 leading-relaxed">
            We collect information necessary to process your orders and improve
            your shopping experience.
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-3 text-gray-700">
            <li>Full name</li>
            <li>Email address</li>
            <li>Mobile phone number</li>
            <li>Shipping and billing addresses</li>
            <li>Order and purchase history</li>
            <li>Payment confirmation details</li>
            <li>Customer support communications</li>
          </ul>

          <p className="text-gray-700 mt-3">
            We may also automatically collect non-personal information such as
            browser type, IP address, device information, operating system, and
            website usage analytics.
          </p>
        </>
      ),
    },

    {
      id: "usage",
      label: "How We Use Your Information",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            How We Use Your Information
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Process and fulfill your orders</li>
            <li>Arrange product shipping and delivery</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Provide customer support</li>
            <li>Improve our website, products, and services</li>
            <li>Prevent fraud and unauthorized transactions</li>
            <li>Comply with applicable legal obligations</li>
          </ul>

          <p className="text-gray-700 mt-3">
            We never sell or rent your personal information to third parties for
            marketing purposes.
          </p>
        </>
      ),
    },

    {
      id: "payments",
      label: "Payment Information",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Payment Information
          </h2>

          <p className="text-gray-700">
            Payments made on our website are processed through trusted and
            secure payment gateway providers. Luka Pods does not store your
            debit card, credit card, UPI PIN, CVV, or banking credentials on
            our servers.
          </p>

          <p className="text-gray-700 mt-3">
            Payment providers use industry-standard encryption and security
            measures to ensure safe and secure transactions.
          </p>
        </>
      ),
    },

    {
      id: "security",
      label: "Data Protection & Security",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Data Protection & Security
          </h2>

          <p className="text-gray-700">
            We implement appropriate technical and organizational security
            measures to protect your personal information from unauthorized
            access, misuse, disclosure, alteration, or destruction.
          </p>

          <p className="text-gray-700 mt-3">
            While we strive to protect your information, no method of electronic
            transmission or storage is completely secure. We continuously review
            and improve our security practices.
          </p>
        </>
      ),
    },

    {
      id: "sharing",
      label: "Information Sharing",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Information Sharing
          </h2>

          <p className="text-gray-700">
            We only share your information when necessary to operate our
            business and fulfill your orders.
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-3 text-gray-700">
            <li>Courier and logistics partners for delivery</li>
            <li>Payment gateway providers for payment processing</li>
            <li>Technology and hosting service providers</li>
            <li>Government or legal authorities when required by law</li>
          </ul>

          <p className="text-gray-700 mt-3">
            All third-party service providers are expected to maintain the
            confidentiality of your information.
          </p>
        </>
      ),
    },

    {
      id: "cookies",
      label: "Cookies",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Cookies
          </h2>

          <p className="text-gray-700">
            Our website uses cookies and similar technologies to enhance your
            browsing experience, remember your preferences, analyze website
            traffic, and improve overall functionality.
          </p>

          <p className="text-gray-700 mt-3">
            You may disable cookies through your browser settings; however,
            certain website features may not function properly.
          </p>
        </>
      ),
    },

    {
      id: "retention",
      label: "Data Retention",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Data Retention
          </h2>

          <p className="text-gray-700">
            We retain your personal information only for as long as necessary to
            fulfill your orders, provide customer support, comply with legal
            obligations, resolve disputes, and enforce our policies.
          </p>
        </>
      ),
    },

    {
      id: "rights",
      label: "Your Rights",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Your Rights
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal data where legally applicable</li>
            <li>Contact us regarding any privacy concerns</li>
          </ul>
        </>
      ),
    },

    {
      id: "children",
      label: "Children's Privacy",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Children's Privacy
          </h2>

          <p className="text-gray-700">
            Our website is intended for individuals who are at least 18 years of
            age or capable of entering into legally binding agreements. We do
            not knowingly collect personal information from children.
          </p>
        </>
      ),
    },

    {
      id: "updates",
      label: "Changes to this Policy",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Changes to This Privacy Policy
          </h2>

          <p className="text-gray-700">
            Luka Pods reserves the right to update or modify this Privacy Policy
            at any time. Any changes will become effective immediately upon
            posting on this page. We encourage customers to review this policy
            periodically.
          </p>
        </>
      ),
    },

    {
      id: "contact",
      label: "Contact Information",
      content: (
        <div className="mt-6">
          <ContactInformation />
        </div>
      ),
    },
  ];

  return <LegalLayout title="Privacy Policy" sections={sections} />;
};

export default PrivacyPolicy;