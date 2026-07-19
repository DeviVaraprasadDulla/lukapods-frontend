const AddressForm = ({
  formData,
  errors,
  savingAddress,
  handleChange,
  handleSaveAddress,
  editingAddress,
}) => {
    const states = [
  // States
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",

  // Union Territories
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];
  return (
    <div className="mt-8 rounded-2xl border border-gray-200 p-6">

      <h3 className="mb-6 text-xl font-semibold">
        Add New Address
      </h3>

      <div className="grid gap-5">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Country / Region
          </label>

          <select
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            disabled
          >
            <option>India</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

            {/* First Name */}
            <div>
                <input
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                className={`w-full rounded-xl border px-4 py-3 ${
                    errors.first_name ? "border-red-500" : "border-gray-300"
                }`}
                />

                {errors.first_name && (
                <p className="mt-1 text-sm text-red-500">
                    {errors.first_name}
                </p>
                )}
            </div>

            {/* Last Name */}
            <div>
                <input
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                className={`w-full rounded-xl border px-4 py-3 ${
                    errors.last_name ? "border-red-500" : "border-gray-300"
                }`}
                />

                {errors.last_name && (
                <p className="mt-1 text-sm text-red-500">
                    {errors.last_name}
                </p>
                )}
            </div>

            </div>

            <div>
            <input
                name="address_line1"
                value={formData.address_line1}
                onChange={handleChange}
                placeholder="House No, Street Name"
                className={`w-full rounded-xl border px-4 py-3 ${
                errors.address_line1 ? "border-red-500" : "border-gray-300"
                }`}
            />

            {errors.address_line1 && (
                <p className="mt-1 text-sm text-red-500">
                {errors.address_line1}
                </p>
            )}
            </div>

            <div>
            <input
                name="address_line2"
                value={formData.address_line2}
                onChange={handleChange}
                placeholder="Apartment, Suite, Landmark (Optional)"
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />
            </div>

        <div className="grid md:grid-cols-3 gap-5">

            {/* City */}
            <div>
                <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className={`w-full rounded-xl border px-4 py-3 ${
                    errors.city ? "border-red-500" : "border-gray-300"
                }`}
                />

                {errors.city && (
                <p className="mt-1 text-sm text-red-500">
                    {errors.city}
                </p>
                )}
            </div>

            {/* State */}
            <div>
                <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`w-full rounded-xl border px-4 py-3 ${
                    errors.state ? "border-red-500" : "border-gray-300"
                }`}
                >
                <option value="">Select State</option>

                {states.map((state) => (
                    <option key={state} value={state}>
                    {state}
                    </option>
                ))}
                </select>

                {errors.state && (
                <p className="mt-1 text-sm text-red-500">
                    {errors.state}
                </p>
                )}
            </div>

            {/* PIN Code */}
            <div>
                <input
                name="zip_code"
                value={formData.zip_code}
                onChange={handleChange}
                maxLength={6}
                inputMode="numeric"
                placeholder="PIN Code"
                className={`w-full rounded-xl border px-4 py-3 ${
                    errors.zip_code ? "border-red-500" : "border-gray-300"
                }`}
                />

                {errors.zip_code && (
                <p className="mt-1 text-sm text-red-500">
                    {errors.zip_code}
                </p>
                )}
            </div>

            </div>

            <div>
            <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                inputMode="numeric"
                placeholder="Phone Number"
                className={`w-full rounded-xl border px-4 py-3 ${
                errors.phone ? "border-red-500" : "border-gray-300"
                }`}
            />

            {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                {errors.phone}
                </p>
            )}
            </div>

            <button
            onClick={handleSaveAddress}
            disabled={savingAddress}
            className="
                h-12
                w-full
                rounded-xl
                bg-black
                text-white
                font-semibold
                hover:bg-gray-900
                disabled:bg-gray-400
                disabled:cursor-not-allowed
            "
            >
            {savingAddress
                ? "Saving..."
                : editingAddress
                ? "Update Address"
                : "Save Address"}
            </button>

      </div>
    </div>
  );
};

export default AddressForm;