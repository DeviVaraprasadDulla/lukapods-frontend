import LegalLayout from "../../components/legal/LegalLayout";
import ContactInformation from "../../components/common/ContactInformation";

const RefundPolicy = () => {
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
            At <strong>Luka Pods</strong>, customer satisfaction is our
            priority. We strive to deliver premium-quality detergent pods and
            ensure every order reaches you in perfect condition. This Refund,
            Cancellation & Replacement Policy explains the circumstances under
            which orders may be cancelled, refunded, or replaced.
          </p>

          <p className="mt-3">
            By placing an order through our website, you agree to the terms
            outlined in this policy.
          </p>
        </>
      ),
    },

    {
      id: "cancellation",
      label: "Order Cancellation Policy",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Order Cancellation Policy
          </h2>

          <p>
            Orders may be cancelled only before they have been processed for
            dispatch.
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Cancellation requests must be submitted before shipment.</li>
            <li>
              Once an order has been packed or handed over to our logistics
              partner, cancellation is no longer possible.
            </li>
            <li>
              Approved cancellations will be refunded using the original payment
              method.
            </li>
          </ul>
        </>
      ),
    },

    {
      id: "refund",
      label: "Refund Policy",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Refund Policy
          </h2>

          <p>Refunds may be approved under the following circumstances:</p>

          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Order cancelled before dispatch.</li>
            <li>Incorrect product delivered.</li>
            <li>Product received in damaged condition.</li>
            <li>Product lost during transit.</li>
            <li>Order cannot be fulfilled due to stock unavailability.</li>
          </ul>

          <h3 className="font-semibold mt-4">Refund Processing Time</h3>

          <p className="mt-2">
            Once approved, refunds are typically processed within{" "}
            <strong>5–7 business days</strong>. The time taken for the amount to
            reflect in your account depends on your bank or payment provider.
          </p>
        </>
      ),
    },

    {
      id: "replacement",
      label: "Damaged or Incorrect Products",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Damaged or Incorrect Products
          </h2>

          <p>
            If you receive a damaged, defective, leaking, or incorrect product,
            please notify us within <strong>48 hours</strong> of delivery.
          </p>

          <h3 className="font-semibold mt-4">
            Information Required for Verification
          </h3>

          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Clear photographs of the product</li>
            <li>Photos of the packaging</li>
            <li>Order number</li>
            <li>Unboxing video (recommended for faster verification)</li>
          </ul>

          <h3 className="font-semibold mt-4">Replacement Process</h3>

          <p className="mt-2">
            After verification, we will arrange a replacement at no additional
            cost. If a replacement is unavailable, an appropriate refund will be
            issued.
          </p>
        </>
      ),
    },

    {
      id: "returns",
      label: "Returns",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Return Eligibility
          </h2>

          <p>
            Due to hygiene and safety reasons, detergent pods are generally not
            eligible for return once the package has been opened.
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Products must be unused and unopened.</li>
            <li>Original packaging should be intact.</li>
            <li>Products should not be damaged due to customer misuse.</li>
          </ul>
        </>
      ),
    },

    {
      id: "nonrefundable",
      label: "Non-Refundable Situations",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Non-Refundable Situations
          </h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>Opened or used detergent pod packages.</li>
            <li>Damage caused after delivery.</li>
            <li>Incorrect shipping address provided by the customer.</li>
            <li>Failure to report damage within the specified timeframe.</li>
            <li>Minor packaging wear that does not affect product quality.</li>
            <li>Delivery delays caused by courier partners or unforeseen events.</li>
          </ul>
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

    {
      id: "updates",
      label: "Policy Updates",
      content: (
        <>
          <h2 className="text-xl font-semibold text-[#0B1C2D] mb-3">
            Policy Updates
          </h2>

          <p>
            Luka Pods reserves the right to modify or update this Refund,
            Cancellation & Replacement Policy at any time without prior notice.
            Any changes will become effective immediately upon publication on
            this page.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalLayout
      title="Refund, Cancellation & Replacement Policy"
      sections={sections}
    />
  );
};

export default RefundPolicy;