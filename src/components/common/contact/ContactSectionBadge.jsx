const ContactSectionBadge = ({
  text,
}) => {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-3

        rounded-full

        border
        border-cyan-400/20

        bg-cyan-400/5

        px-5
        py-2.5

        backdrop-blur-xl
      "
    >
      <span
        className="
          h-2
          w-2
          rounded-full
          bg-cyan-400
        "
      />

      <span
        className="
          text-[11px]
          font-bold
          uppercase
          tracking-[0.3em]
          text-slate-700
        "
      >
        {text}
      </span>
    </div>
  );
};

export default ContactSectionBadge;