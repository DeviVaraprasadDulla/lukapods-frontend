import { Link } from "react-router-dom";

const ContactSection = ({ email, isAuthenticated }) => {
  return (
    <section className="border-b border-gray-200 pb-10">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Contact
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          We'll use this email to send your order confirmation.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            value={email || ""}
            readOnly
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-gray-50
              px-4
              py-3
              text-gray-700
            "
          />
        </div>

        {!isAuthenticated && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Already have an account?
            </span>

            <Link
              to="/login"
              className="text-sm font-semibold text-black hover:underline"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;