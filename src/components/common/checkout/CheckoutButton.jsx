const CheckoutButton = ({
  total,
  placingOrder,
  handlePlaceOrder,
}) => {
  return (
    <div className="mt-8 space-y-4">
      <button
        onClick={handlePlaceOrder}
        disabled={placingOrder}
        className="w-full rounded-xl bg-black px-6 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {placingOrder ? (
          <div className="flex items-center justify-center gap-3">
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-20"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />

              <path
                className="opacity-100"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>

            Creating Order...
          </div>
        ) : (
          `Pay ₹${Number(total).toFixed(2)}`
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11V7m0 4l-3 3m3-3l3 3M5 20h14"
          />
        </svg>

        Secure checkout powered by Razorpay
      </div>
    </div>
  );
};

export default CheckoutButton;