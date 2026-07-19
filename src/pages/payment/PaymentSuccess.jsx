import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axios";
import { motion } from "framer-motion";
import ConfettiEffect from "./components/ConfettiEffect";

const PaymentSuccess = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await API.get(`/orders/by-token/${token}/`);
        setOrder(res.data);
      } catch (err) {
        navigate("/orders");
      }
    };

    fetchOrder();
  }, [token, navigate]);

  if (!order) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,#EAF6FF_0%,#F8FBFF_45%,#FFFFFF_100%)]">
      <ConfettiEffect />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center"
      >
        <div className="mb-6 flex justify-center">
          <img
            src="/images/luka-logo.png"
            alt="LukaPods"
            className="h-20 w-auto object-contain"
          />
        </div>

        <h2 className="mb-3 text-4xl font-black tracking-tight text-[#0A84D8]">
          Payment Successful
        </h2>

        <p className="mx-auto mb-8 max-w-sm text-slate-600 leading-7">
          Thank you for choosing LukaPods. Your order has been confirmed successfully and is now being processed.
        </p>
        <div className="mb-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-left">

          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Order Number
          </p>

          <h3 className="mt-1 text-xl font-black text-[#0A84D8]">
            #{order.order_token.slice(0, 8).toUpperCase()}
          </h3>

          <div className="mt-5 inline-flex rounded-full bg-[#E8F4FD] px-4 py-2 text-sm font-semibold text-[#0A84D8]">
            {order.order_status}
          </div>

        </div>

        <button
          onClick={() => navigate("/my-orders")}
          className="
            w-full
            rounded-full
            bg-[#0A84D8]
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-[#086DB2]
            hover:shadow-lg
            "
        >
          Go to My Orders
        </button>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
