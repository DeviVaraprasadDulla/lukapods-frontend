const FooterBottom = () => {
  return (
    <div
      className="
        mt-20
        flex
        flex-col
        items-center
        justify-between
        gap-6
        border-t
        border-white/10
        pt-8
        lg:flex-row
      "
    >
      <p
        className="
          text-sm
          text-slate-500
        "
      >
        © 2026 Luka Home Essentials.
        All rights reserved.
      </p>

      <p
        className="
          text-sm
          text-slate-600
        "
      >
        Crafted with premium
        experience & innovation.
      </p>
    </div>
  );
};

export default FooterBottom;