import { useEffect } from "react";
import useCheckout from "@/hooks/useCheckout";
import CheckoutHeader from "@/components/common/checkout/CheckoutHeader";
import ContactSection from "@/components/common/checkout/ContactSection";
import { useAuth } from "@/context/AuthContext";
import DeliverySection from "@/components/common/checkout/DeliverySection";
import OrderSummary from "@/components/common/checkout/OrderSummary";
import PaymentSection from "@/components/common/checkout/PaymentSection";
import CheckoutButton from "@/components/common/checkout/CheckoutButton";
import PageLoader from "@/components/common/PageLoader";
export default function Checkout() {
  const {
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
        editingAddress,
    setEditingAddress,
    handleEditAddress,
    handleDeleteAddress,
    
  } = useCheckout();
const { user, isAuthenticated } = useAuth();
 // 👇 Add this here
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  if (loading) {
    return <PageLoader text="Loading checkout..." />;
  }
  return (
    <>
      <CheckoutHeader />

      <div className="grid lg:grid-cols-[58%_42%] min-h-screen">
        {/* Left */}
        <div className="space-y-10 p-8">
          <ContactSection
            email={user?.email}
            isAuthenticated={isAuthenticated}
          />

          <DeliverySection
            addresses={addresses}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            showAddressForm={showAddressForm}
            setShowAddressForm={setShowAddressForm}
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSaveAddress={handleSaveAddress}
            editingAddress={editingAddress}
            handleEditAddress={handleEditAddress}
            handleDeleteAddress={handleDeleteAddress}
          />

        </div>

        {/* Right */}
        <div className="p-8 bg-gray-50 border-l">
          <OrderSummary
            checkout={checkout}
            selectedAddress={selectedAddress}
            handlePlaceOrder={handlePlaceOrder}
            placingOrder={placingOrder}
        />
        </div>
      </div>
    </>
  );
}