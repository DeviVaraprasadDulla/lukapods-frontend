import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import API from "../../api/axios";
import PaymentSummary from "./components/PaymentSummary";
import { useCart } from "../../context/CartContext";
import PageLoader from "@/components/common/PageLoader";
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
 if (!order) {
    return (
        <PageLoader text="Preparing secure payment..." />
    );
}
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
<div
  className="
    relative
    min-h-screen

    overflow-hidden

    bg-[radial-gradient(circle_at_top,#eef8ff_0%,#f8fbff_45%,#ffffff_100%)]

    flex
    items-center
    justify-center

    px-4
  "
>   <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
              relative

              w-full
              max-w-xl

              rounded-[36px]

              border
              border-white/60

              bg-white/85

              backdrop-blur-xl

              shadow-[0_30px_80px_rgba(15,23,42,.08)]

              p-10
              "      >
        {/* LEFT SIDE */}
        <div>
        <h2
            className="
                text-4xl

                font-black

                text-[#020817]

                leading-tight
            "
        >
            Secure Payment
          </h2>

          <p className="text-gray-500 mb-6">
            Your payment is securely processed by Razorpay using industry-standard encryption.
          </p>


            {/* PAYMENT METHOD */}

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                mb-6
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#020817]">
                    Razorpay Secure Checkout
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Pay securely using UPI, Credit Card, Debit Card,
                    Net Banking or Wallet.
                  </p>
                </div>

                <img
                  src="/images/razorpay.jpg"
                  alt="Razorpay"
                  className="h-10 object-contain"
                />
              </div>
            </div>

          {/* ORDER AMOUNT */}

          <div className="my-8 text-center">
            <p className="text-sm text-slate-500">
              Order Amount
            </p>

            <h1 className="mt-2 text-5xl font-black text-[#020817]">
              ₹{order.total_amount}
            </h1>
          </div>
        <button
            onClick={handleRazorpayPayment}
            disabled={loading}
            className="
            mt-8

            h-14

            w-full

            rounded-full

            bg-[#020817]

            text-white

            font-semibold

            transition

            hover:bg-slate-900

            disabled:opacity-60
            "          >
            {loading
                ? "Processing..."
                : `Pay Securely • ₹${order.total_amount}`
            }
          </button>
          {/* TRUST FEATURES */}

            <div className="space-y-3 mb-8">

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                🔒
                <span className="text-sm font-medium">
                  SSL Encrypted Payment
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                ⚡
                <span className="text-sm font-medium">
                  Instant Payment Confirmation
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                🛡
                <span className="text-sm font-medium">
                  Powered by Razorpay
                </span>
              </div>

            </div>

          {/* CONDITIONAL BUTTON */}
              {/* PAYMENT FOOTER */}

            <p
              className="
                mt-5

                text-center

                text-xs

                text-slate-500
              "
            >
              Your payment information is encrypted and never stored on our servers.
            </p>
        </div>

        {/* RIGHT SIDE */}
        {/* <PaymentSummary order={order} /> */}
      </motion.div>
    </div>
  );
};

export default Payment;
