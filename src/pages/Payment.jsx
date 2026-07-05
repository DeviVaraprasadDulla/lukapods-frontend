import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  createOrder,
  markOrderPaid,
} from "@/api/checkoutApi";

import { useCart } from "@/context/CartContext";
const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
    const { setCartItems, fetchCart } = useCart();
  const [loading, setLoading] = useState(false);

  const addressId = state?.addressId;

const handleDummyPayment = async () => {
  try {
    setLoading(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create Order (PENDING)
    const order = await createOrder(addressId);

    // Mark as PAID (Dummy Payment)
    await markOrderPaid(order.order_token);
    // Instantly clear local cart
    setCartItems([]);

    // Sync with backend
    await fetchCart();
    // Navigate to success page
    navigate("/payment-success", {
      state: {
        orderToken: order.order_token,
      },
    });

  } catch (error) {
    alert(error?.response?.data?.error || "Payment Failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-[#edf3f8] flex justify-center items-center">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-3xl font-black text-center">
          Payment
        </h1>

        <p className="mt-2 text-center text-slate-500">
          Razorpay 
        </p>

        <div className="mt-8 space-y-4">

          <div className="border rounded-2xl p-4 flex justify-between">
            <span>Payment Method</span>
            <span className="font-semibold">Pay Now</span>
          </div>

          <button
            onClick={handleDummyPayment}
            disabled={loading}
            className="w-full h-14 rounded-full bg-[#020817] text-white font-bold"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>

        </div>
      </div>
    </main>
  );
};

export default Payment;