const ContactInput = ({
  label,
  type = "text",
  placeholder,
  textarea = false,
}) => {
  const baseStyles = `
    w-full
    rounded-3xl
    border
    border-white/10
    bg-white/[0.04]
    px-6
    py-4
    text-slate-800
    outline-none
    backdrop-blur-xl
    transition-all
    duration-300
    placeholder:text-slate-400
    focus:border-cyan-400/40
    focus:bg-white
    focus:shadow-[0_0_40px_rgba(34,211,238,0.12)]
  `;

  return (
    <div>
      <label
        className="
          mb-3
          block
          text-sm
          font-semibold
          text-slate-700
        "
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          rows={6}
          placeholder={placeholder}
          className={baseStyles}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={baseStyles}
        />
      )}
    </div>
  );
};

export default ContactInput;