import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#020817]
        pt-24
        text-white
      "
    >
      {/* PREMIUM BACKGROUND */}
      <div
        className="
          absolute
          inset-0
        "
      >
        {/* GRADIENT */}
        <div
          className="
            absolute
            left-[-10%]
            top-[-10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            bottom-[-10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-indigo-500/10
            blur-3xl
          "
        />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
        "
      >
        {/* TOP */}
        <div
          className="
            grid
            gap-16
            border-b
            border-white/10
            pb-16
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >
          {/* LEFT */}
          <div>
            <FooterBrand />

            <div className="mt-10">
              <FooterSocials />
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              justify-start
              lg:justify-end
            "
          >
            <FooterLinks />
          </div>
        </div>

        {/* BOTTOM */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;