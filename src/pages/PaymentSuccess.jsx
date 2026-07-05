import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/my-orders");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="min-h-screen bg-[#edf3f8] flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-lg p-10 text-center max-w-md">

        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-3xl font-black">
          Payment Successful
        </h1>

        <p className="mt-3 text-slate-500">
          Your order has been placed successfully.
        </p>

        <p className="mt-6 text-sm text-slate-400">
          Redirecting to My Orders...
        </p>

      </div>
    </main>
  );
};

export default PaymentSuccess;