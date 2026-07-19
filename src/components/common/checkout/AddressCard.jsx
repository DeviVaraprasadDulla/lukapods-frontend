import { FiMapPin } from "react-icons/fi";

const AddressCard = ({
  address,
  selected,
  onSelect,
  onEdit,
  onDelete,
}) => {
  return (
    <label
      className={`
        flex
        gap-4
        cursor-pointer
        rounded-2xl
        border
        p-5
        transition-all
        ${
          selected
            ? "border-black bg-gray-50"
            : "border-gray-200 hover:border-gray-400"
        }
      `}
    >
      <input
        type="radio"
        checked={selected}
        onChange={onSelect}
        className="mt-1 h-4 w-4"
      />

      <div className="flex-1">

        {/* Header */}
        <div className="flex items-start justify-between">

          <div className="flex items-center gap-2">
            <FiMapPin className="text-gray-500" />

            <h3 className="font-semibold">
              {address.first_name} {address.last_name}
            </h3>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onEdit(address);
            }}
            className="text-sm font-medium text-gray-500 hover:text-black"
          >
            Edit
          </button>
          {/* <button
                onClick={() => onDelete(address.id)}
                className="text-sm text-red-600 hover:underline"
            >
                Delete
            </button> */}

        </div>

        <p className="mt-3 text-sm text-gray-600">
          {address.address_line1}
        </p>

        {address.address_line2 && (
          <p className="text-sm text-gray-600">
            {address.address_line2}
          </p>
        )}

        <p className="text-sm text-gray-600">
          {address.city}, {address.state}
        </p>

        <p className="text-sm text-gray-600">
          {address.zip_code}
        </p>

        <p className="mt-2 text-sm font-medium">
          {address.phone}
        </p>

      </div>
    </label>
  );
};

export default AddressCard;