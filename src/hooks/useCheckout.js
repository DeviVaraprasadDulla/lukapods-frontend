import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

import {
  getCheckoutSummary,
  getAddresses,
  saveAddress,
  updateAddress,
  deleteAddress,
  createOrder,
} from "@/api/checkoutApi";

export default function useCheckout() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [loading, setLoading] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);

    const [checkout, setCheckout] = useState({
    items: [],
    summary: {
        subtotal: 0,
        shipping: 0,
        tax: 0,
        total: 0,
    },
    });

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const [showAddressForm, setShowAddressForm] = useState(false);
const [errors, setErrors] = useState({
  first_name: "",
  last_name: "",
  address_line1: "",
  city: "",
  state: "",
  zip_code: "",
  phone: "",
});
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
const [editingAddress, setEditingAddress] = useState(null);
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

    // console.log("Checkout Data:", checkoutData);
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

  /*
  |--------------------------------------------------------------------------
  | AUTH CHECK
  |--------------------------------------------------------------------------
  */

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
    if (editingAddress) {
      // UPDATE EXISTING ADDRESS
      await updateAddress(editingAddress.id, formData);
    } else {
      // CREATE NEW ADDRESS
      const response = await saveAddress(formData);
      setSelectedAddress(response.id);
    }

    await loadCheckout();

    setEditingAddress(null);
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

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      alert("Please select an address");
      return;
    }

    try {
      setPlacingOrder(true);

      const response = await createOrder(selectedAddress);

      navigate(`/payment/${response.order_token}`);
    } catch (error) {
      alert(error?.response?.data?.error || "Failed to create order");
    } finally {
      setPlacingOrder(false);
    }
  };
const handleEditAddress = (address) => {
    setEditingAddress(address);

    setFormData({
        first_name: address.first_name,
        last_name: address.last_name,
        phone: address.phone,
        address_line1: address.address_line1,
        address_line2: address.address_line2,
        city: address.city,
        state: address.state,
        zip_code: address.zip_code,
    });

    setShowAddressForm(true);
};
const handleDeleteAddress = async (addressId) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this address?"
  );

  if (!confirmed) return;

  try {
    await deleteAddress(addressId);

    await loadCheckout();

    // If the deleted address was selected, clear the selection
    if (selectedAddress === addressId) {
      setSelectedAddress(null);
    }

    // If the deleted address was being edited, reset the form
    if (editingAddress?.id === addressId) {
      setEditingAddress(null);
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
    }
  } catch (error) {
    alert(error?.response?.data?.error || "Unable to delete address");
  }
};
  /*
  |--------------------------------------------------------------------------
  | RETURN
  |--------------------------------------------------------------------------
  */

  return {
    loading,
    placingOrder,

    checkout,

    addresses,

    selectedAddress,
    setSelectedAddress,

    showAddressForm,
    setShowAddressForm,

    formData,
      errors,
  setErrors,

    handleChange,
    handleSaveAddress,
    handlePlaceOrder,

    loadCheckout,
    editingAddress,
    setEditingAddress,

    handleEditAddress,
    handleDeleteAddress,
  };
}