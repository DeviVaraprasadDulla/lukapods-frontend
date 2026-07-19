import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiMapPin,
  FiCreditCard,
} from "react-icons/fi";

const CheckoutHeader = () => {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 py-6 lg:px-10">

        {/* Title */}

        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-[#020817]">
            Secure Checkout
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Complete your order in just a few simple steps.
          </p>
        </div>

        {/* Progress */}

        <div className="flex items-center justify-between">

          {/* Cart */}

          <div className="flex flex-1 flex-col items-center">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#020817] text-white shadow-md">
              <FiShoppingCart size={20} />
            </div>

            <span className="mt-3 text-sm font-semibold text-[#020817]">
              Cart
            </span>

          </div>

          <div className="mx-2 h-[2px] flex-1 bg-slate-200">
            <div className="h-full w-full bg-[#020817]" />
          </div>

          {/* Checkout */}

          <div className="flex flex-1 flex-col items-center">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#020817] text-white shadow-md">
              <FiMapPin size={20} />
            </div>

            <span className="mt-3 text-sm font-semibold text-[#020817]">
              Checkout
            </span>

          </div>

          <div className="mx-2 h-[2px] flex-1 bg-slate-200">
            <div className="h-full w-1/2 bg-[#020817]" />
          </div>

          {/* Payment */}

          <div className="flex flex-1 flex-col items-center">

            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400">
              <FiCreditCard size={20} />
            </div>

            <span className="mt-3 text-sm font-medium text-slate-400">
              Payment
            </span>

          </div>

        </div>

      </div>
    </header>
  );
};

export default CheckoutHeader;