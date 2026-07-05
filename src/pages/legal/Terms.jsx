import LegalLayout from "../../components/legal/LegalLayout";
import ContactInformation from "../../components/common/ContactInformation";

const Terms = () => {
  const sections = [
    {
      id: "introduction",
      label: "Introduction",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Introduction
          </h2>

          <p>
            Welcome to <strong>Luka Pods</strong>. These Terms and Conditions
            govern your access to and use of our website, as well as the
            purchase of our detergent pod products. By accessing this website or
            placing an order, you agree to comply with these Terms and
            Conditions.
          </p>

          <p className="mt-3">
            Luka Pods is an e-commerce platform offering premium detergent pods
            designed to provide an effective, convenient, and modern laundry
            experience for households and businesses.
          </p>
        </>
      ),
    },

    {
      id: "acceptance",
      label: "Acceptance of Terms",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Acceptance of Terms
          </h2>

          <p>
            By accessing, browsing, or purchasing products from this website,
            you acknowledge that you have read, understood, and agreed to these
            Terms and Conditions, along with our Privacy Policy, Shipping
            Policy, and Refund Policy.
          </p>
        </>
      ),
    },

    {
      id: "products",
      label: "Products",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Products
          </h2>

          <p>
            Luka Pods offers premium detergent pod products intended for laundry
            cleaning purposes. We strive to ensure that all product descriptions,
            specifications, images, and pricing displayed on our website are
            accurate.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Product images are for illustration purposes only.</li>
            <li>
              Actual packaging may vary slightly from images shown on the
              website.
            </li>
            <li>
              Product availability is subject to stock and may change without
              prior notice.
            </li>
          </ul>
        </>
      ),
    },

    {
      id: "orders",
      label: "Orders",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Orders
          </h2>

          <p>
            All orders placed through our website are subject to acceptance and
            availability.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Orders are confirmed only after successful payment.</li>
            <li>
              We reserve the right to refuse or cancel any order if fraudulent
              activity or incorrect information is suspected.
            </li>
            <li>
              Customers are responsible for providing accurate shipping and
              contact information.
            </li>
          </ul>
        </>
      ),
    },

    {
      id: "payments",
      label: "Pricing & Payments",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Pricing & Payments
          </h2>

          <p>
            All prices displayed on our website are in Indian Rupees (INR)
            unless otherwise specified.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Prices include applicable taxes unless stated otherwise.</li>
            <li>
              Payments are securely processed through trusted payment gateway
              providers.
            </li>
            <li>
              Orders are processed only after payment has been successfully
              received.
            </li>
          </ul>
        </>
      ),
    },

    {
      id: "shipping",
      label: "Shipping & Delivery",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Shipping & Delivery
          </h2>

          <p>
            Luka Pods ships products through reliable courier and logistics
            partners across eligible service locations.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>
              Delivery timelines are estimates and may vary depending on the
              destination.
            </li>
            <li>
              Customers must ensure that the shipping address and contact
              information provided are accurate.
            </li>
            <li>
              Delivery delays caused by courier services, weather conditions, or
              unforeseen circumstances are beyond our control.
            </li>
          </ul>
        </>
      ),
    },

    {
      id: "returns",
      label: "Returns & Refunds",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Returns & Refunds
          </h2>

          <p>
            Due to hygiene and safety reasons, opened detergent pod packages are
            generally not eligible for return.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Damaged or leaking products</li>
            <li>Incorrect product delivered</li>
            <li>Manufacturing defects</li>
          </ul>

          <p className="mt-3">
            Customers should report any such issues within 48 hours of delivery
            along with supporting photographs or an unboxing video. Please refer
            to our Refund Policy for complete details.
          </p>
        </>
      ),
    },

    {
      id: "productuse",
      label: "Product Usage & Safety",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Product Usage & Safety
          </h2>

          <p>
            Customers are responsible for using Luka Pods products according to
            the usage instructions provided on the packaging.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Keep detergent pods out of reach of children and pets.</li>
            <li>Do not ingest or puncture detergent pods.</li>
            <li>Store in a cool, dry place away from moisture.</li>
            <li>Use only as directed for laundry cleaning.</li>
          </ul>
        </>
      ),
    },

    {
      id: "intellectual",
      label: "Intellectual Property",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Intellectual Property
          </h2>

          <p>
            All content on this website, including logos, branding, product
            images, graphics, text, and website design, is the intellectual
            property of Luka Pods unless otherwise stated. Unauthorized copying,
            reproduction, or distribution is prohibited without prior written
            permission.
          </p>
        </>
      ),
    },

    {
      id: "liability",
      label: "Limitation of Liability",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Limitation of Liability
          </h2>

          <p>Luka Pods shall not be liable for:</p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Delivery delays caused by third-party logistics providers.</li>
            <li>Incorrect shipping information provided by customers.</li>
            <li>Payment gateway interruptions or technical failures.</li>
            <li>Improper use or storage of our products.</li>
            <li>Indirect, incidental, or consequential damages.</li>
          </ul>
        </>
      ),
    },

    {
      id: "changes",
      label: "Changes to Terms",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Changes to Terms
          </h2>

          <p>
            Luka Pods reserves the right to modify these Terms and Conditions at
            any time. Updated versions will be published on this page and become
            effective immediately upon posting. Continued use of the website
            constitutes acceptance of the revised Terms.
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

  return <LegalLayout title="Terms & Conditions" sections={sections} />;
};

export default Terms;