import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import API from "../../api/axios";
import PaymentSummary from "./components/PaymentSummary";
import { useCart } from "../../context/CartContext";
const Payment = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
const { setCartItems } = useCart();
const [verifyingPayment, setVerifyingPayment] = useState(false);
  // Fetch Order
  useEffect(() => {
        const fetchOrder = async () => {
          try {
            const res = await API.get(`/orders/by-token/${token}/`);

            if (res.data.payment_status === "PAID") {
              navigate(`/payment-success/${token}`, {
                replace: true,
              });
              return;
            }

            setOrder(res.data);
          } catch (err) {
            navigate("/orders");
          }
        };

    fetchOrder();
  }, [token, navigate]);
const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => resolve(true);

    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};
 const handleRazorpayPayment = async () => {
  if (!order) return;

  try {
    setLoading(true);

    const loaded = await loadRazorpay();

    if (!loaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const res = await API.post(
      "/payments/create-order/",
      {
        order_token: token,
      }
    );

    const data = res.data;

    const options = {
      key: data.key,

      amount: data.amount,

      currency: "INR",

      name: "LukaPods",

      description: "Order Payment",

      order_id: data.razorpay_order_id,

      handler: async function (response) {
        try {
          setVerifyingPayment(true);
          await API.post(
            "/payments/verify/",
            {
              order_token: token,

              razorpay_order_id:
                response.razorpay_order_id,

              razorpay_payment_id:
                response.razorpay_payment_id,

              razorpay_signature:
                response.razorpay_signature,
            }
          );
              // Immediately clear cart badge
          setCartItems([]);
          navigate(`/payment-success/${token}`, {
            replace: true,
          });
        } catch (error) {
          alert(
            "Payment verification failed"
          );
        }
      },

    theme: {
      color: "#0F766E",
    },
    };

    const razorpay =
      new window.Razorpay(options);

    razorpay.open();
  } catch (err) {
    alert(
      err.response?.data?.error ||
        "Payment failed"
    );
  } finally {
    setLoading(false);
  }
};
  if (!order) return null;
  if (verifyingPayment) {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-[#db1e57] rounded-full animate-spin" />

      <h2 className="mt-5 text-xl font-semibold">
        Processing Payment...
      </h2>

      <p className="text-gray-500 mt-2">
        Please wait. Do not refresh or go back.
      </p>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-6 md:p-10 grid md:grid-cols-2 gap-8"
      >
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Complete Your Payment
          </h2>

          <p className="text-gray-500 mb-6">
            Your payment is encrypted and processed securely through Razorpay.
          </p>

          {/* PHONEPE OPTION */}
          <div className="border-2 border-[#0F766E] bg-[#F0FDFA] rounded-2xl p-5 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Secure Online Payment
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Pay securely using UPI, Credit Card, Debit Card,
                Net Banking or Wallet.
              </p>
            </div>

            <img
              src="/images/razorpay.png"
              alt="Razorpay"
              className="h-10"
            />
          </div>
          </div>



          {/* CONDITIONAL BUTTON */}
        <button
            onClick={handleRazorpayPayment}
            disabled={loading}
            className="mt-6 w-full bg-[#0F766E] hover:bg-[#115E59] text-white py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Processing..." : `Pay ₹${order.total_amount}`}
          </button>
        </div>

        {/* RIGHT SIDE */}
        <PaymentSummary order={order} />
      </motion.div>
    </div>
  );
};

export default Payment;
