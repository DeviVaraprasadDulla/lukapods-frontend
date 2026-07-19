import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";

const DeliverySection = ({
  addresses,
  selectedAddress,
  setSelectedAddress,
  showAddressForm,
  setShowAddressForm,
  formData,
  errors,
  handleChange,
  handleSaveAddress,
  editingAddress,
  handleEditAddress,
   handleDeleteAddress,
}) => {
  return (
    <section className="py-10 border-b border-gray-200">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-semibold">
          Delivery
        </h2>

        <button
          onClick={() =>
            setShowAddressForm(!showAddressForm)
          }
          className="font-semibold hover:underline"
        >
          + Add Address
        </button>

      </div>

      <div className="space-y-4">

        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            selected={selectedAddress === address.id}
            onSelect={() =>
              setSelectedAddress(address.id)
            }
            onEdit={handleEditAddress}
            onDelete={handleDeleteAddress}
          />
        ))}

      </div>

      {showAddressForm && (
        <AddressForm
            formData={formData}
            errors={errors}
          handleChange={handleChange}
          handleSaveAddress={handleSaveAddress}
          editingAddress={editingAddress}
        />
      )}

    </section>
  );
};

export default DeliverySection;