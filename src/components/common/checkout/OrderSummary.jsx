const OrderSummary = ({
  checkout,
  selectedAddress,
  handlePlaceOrder,
  placingOrder,
}) => {
  if (!checkout) return null;

  return (
    <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Heading */}
      <h2 className="mb-6 text-xl font-semibold">
        Order Summary
      </h2>

      {/* Products */}
      <div className="space-y-5">
        {checkout.items.map((item) => (
          <div
            key={item.product_id}
            className="flex items-start gap-4"
          >
            <div className="relative">
              <img
                src={item.product_image}
                alt={item.product_name}
                className="h-20 w-20 rounded-xl border object-cover"
              />

              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-white">
                {item.quantity}
              </span>
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">
                {item.product_name}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                ₹{item.price} × {item.quantity}
              </p>
            </div>

            <div className="font-semibold">
              ₹{item.subtotal}
            </div>
          </div>
        ))}
      </div>

      <div className="my-6 border-t" />

      {/* Price Details */}
      <div className="space-y-3 text-sm">

        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>₹{checkout.summary.subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>₹{checkout.summary.shipping}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Taxes</span>
          <span>Included</span>
        </div>

      </div>

      <div className="my-6 border-t" />

      {/* Total */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">
            Total
          </p>

          <p className="text-xs text-gray-500">
            Including all taxes
          </p>
        </div>

        <div className="text-2xl font-bold">
          ₹{checkout.summary.total}
        </div>
      </div>

      {/* Proceed Button */}
      <button
        onClick={handlePlaceOrder}
        disabled={!selectedAddress || placingOrder}
        className="w-full rounded-xl bg-black px-6 py-4 text-lg font-semibold text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {placingOrder
          ? "Please wait..."
          : `Proceed to Payment • ₹${checkout.summary.total}`}
      </button>

      {!selectedAddress && (
        <p className="mt-3 text-center text-sm text-red-500">
          Please select a delivery address to continue.
        </p>
      )}

      <p className="mt-4 text-center text-xs text-gray-500">
        You will be redirected to our secure payment page.
      </p>

    </div>
  );
};

export default OrderSummary;