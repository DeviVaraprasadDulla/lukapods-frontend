const PaymentSection = () => {
  return (
    <section className="space-y-6">

      <div>
        <h2 className="text-2xl font-semibold">
          Payment
        </h2>

        <p className="text-gray-500 mt-1">
          All transactions are secure and encrypted.
        </p>
      </div>

      <div className="border rounded-2xl p-5">

        <label className="flex items-center gap-4 cursor-pointer">

          <input
            type="radio"
            checked
            readOnly
            className="w-5 h-5"
          />

          <div className="flex-1">
            <h3 className="font-semibold">
              Razorpay
            </h3>

            <p className="text-sm text-gray-500">
              Pay securely using UPI, Credit Card, Debit Card, Net Banking or Wallet.
            </p>
          </div>

          <img
            src="/images/payment/razorpay.svg"
            alt="Razorpay"
            className="h-7"
          />

        </label>

      </div>

    </section>
  );
};

export default PaymentSection;