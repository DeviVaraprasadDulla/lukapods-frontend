import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  getCheckoutSummary,
  getAddresses,
  saveAddress,
  createOrder,
} from "@/api/checkoutApi";

const Checkout = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);

  const [checkout, setCheckout] = useState({
    items: [],
    total_amount: 0,
  });

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const [showAddressForm, setShowAddressForm] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    zip_code: "",
  });

  /*
  |--------------------------------------------------------------------------
  | LOAD CHECKOUT DATA
  |--------------------------------------------------------------------------
  */

  const loadCheckout = async () => {
    try {
      const [checkoutData, addressData] = await Promise.all([
        getCheckoutSummary(),
        getAddresses(),
      ]);

      setCheckout(checkoutData);

      setAddresses(addressData || []);

      if (addressData?.length > 0) {
        setSelectedAddress(addressData[0].id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  if (!isAuthenticated) {
    navigate("/login", {
      state: { from: "/checkout" },
      replace: true,
    });
    return;
  }

  loadCheckout();
}, [isAuthenticated]);

  /*
  |--------------------------------------------------------------------------
  | INPUT CHANGE
  |--------------------------------------------------------------------------
  */

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /*
  |--------------------------------------------------------------------------
  | SAVE ADDRESS
  |--------------------------------------------------------------------------
  */

  const handleSaveAddress = async () => {
    try {
      const response = await saveAddress(formData);

      await loadCheckout();

      setSelectedAddress(response.id);

      setShowAddressForm(false);

      setFormData({
        first_name: "",
        last_name: "",
        phone: "",
        address_line1: "",
        address_line2: "",
        city: "",
        state: "",
        zip_code: "",
      });
    } catch (error) {
      alert(error?.response?.data?.error || "Unable to save address");
    }
  };

  /*
  |--------------------------------------------------------------------------
  | PLACE ORDER
  |--------------------------------------------------------------------------
  */

  // const handlePlaceOrder = async () => {
  //   if (!selectedAddress) {
  //     alert("Please select an address");
  //     return;
  //   }

  //   try {
  //     setPlacingOrder(true);

  //     const response = await createOrder(selectedAddress);

  //     navigate(`/order-success/${response.order_token}`);
  //   } catch (error) {
  //     alert(error?.response?.data?.error || "Failed to create order");
  //   } finally {
  //     setPlacingOrder(false);
  //   }
  // };
const handlePlaceOrder = () => {
  if (!selectedAddress) {
    alert("Please select an address");
    return;
  }

  navigate("/payment", {
    state: {
      addressId: selectedAddress,
    },
  });
};
  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#edf3f8]">
        <div className="h-12 w-12 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#edf3f8] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          {/* LEFT */}

          <div className="space-y-8">
            {/* ADDRESS SECTION */}

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900">
                  Shipping Address
                </h2>

                <button
                  onClick={() => setShowAddressForm(!showAddressForm)}
                  className="text-cyan-600 font-semibold"
                >
                  + Add Address
                </button>
              </div>

              {/* SAVED ADDRESSES */}

              <div className="mt-5 space-y-3">
                {addresses.map((address) => (
                  <label
                    key={address.id}
                    className="flex gap-3 border rounded-2xl p-4 cursor-pointer"
                  >
                    <input
                      type="radio"
                      checked={selectedAddress === address.id}
                      onChange={() => setSelectedAddress(address.id)}
                    />

                    <div>
                      <p className="font-semibold">
                        {address.first_name} {address.last_name}
                      </p>

                      <p className="text-slate-500 text-sm">
                        {address.address_line1}
                      </p>

                      <p className="text-slate-500 text-sm">
                        {address.city}, {address.state}
                      </p>

                      <p className="text-slate-500 text-sm">{address.phone}</p>
                    </div>
                  </label>
                ))}
              </div>

              {/* ADDRESS FORM */}

              {showAddressForm && (
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <input
                    name="first_name"
                    placeholder="First Name"
                    onChange={handleChange}
                    className="border rounded-xl px-4 py-3"
                  />

                  <input
                    name="last_name"
                    placeholder="Last Name"
                    onChange={handleChange}
                    className="border rounded-xl px-4 py-3"
                  />

                  <input
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    className="border rounded-xl px-4 py-3"
                  />

                  <input
                    name="zip_code"
                    placeholder="Pincode"
                    onChange={handleChange}
                    className="border rounded-xl px-4 py-3"
                  />

                  <input
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    className="border rounded-xl px-4 py-3"
                  />

                  <input
                    name="state"
                    placeholder="State"
                    onChange={handleChange}
                    className="border rounded-xl px-4 py-3"
                  />

                  <input
                    name="address_line1"
                    placeholder="Address Line 1"
                    onChange={handleChange}
                    className="border rounded-xl px-4 py-3 sm:col-span-2"
                  />

                  <input
                    name="address_line2"
                    placeholder="Address Line 2"
                    onChange={handleChange}
                    className="border rounded-xl px-4 py-3 sm:col-span-2"
                  />

                  <button
                    onClick={handleSaveAddress}
                    className="
                      sm:col-span-2
                      h-12
                      rounded-xl
                      bg-slate-900
                      text-white
                      font-semibold
                    "
                  >
                    Save Address
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <div className="sticky top-28 rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                {checkout.items?.map((item) => (
                  <div key={item.product_id} className="flex justify-between">
                    <div>
                      <p className="font-semibold">{item.product}</p>

                      <p className="text-sm text-slate-500">
                        Qty {item.quantity}
                      </p>
                    </div>

                    <span className="font-bold">₹{item.subtotal}</span>
                  </div>
                ))}
              </div>

              <div className="border-t mt-6 pt-6">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total</span>

                  <span className="text-3xl font-black">
                    ₹{checkout.total_amount}
                  </span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={placingOrder}
                className="
                  mt-6
                  w-full
                  h-14
                  rounded-full
                  bg-[#020817]
                  text-white
                  font-bold
                  disabled:opacity-50
                "
              >
                {placingOrder ? "Creating Order..." : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
