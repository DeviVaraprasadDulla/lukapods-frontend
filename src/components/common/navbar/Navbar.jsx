import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // <-- Integrated useLocation for active states
import { Menu, X, ArrowRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { lukaLogo } from "@/assets";
import { SITE_CONFIG } from "@/config/theme";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import { User } from "lucide-react";

const Navbar = () => {
  const location = useLocation(); // <-- Get current path for active links
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hideAnnouncementSpace, setHideAnnouncementSpace] = useState(false);
  const { cartCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  // const { cartOpen, closeCart } = useCart();
const [profileOpen, setProfileOpen] = useState(false);
  //
  // SCROLL EFFECTS
  //
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setHideAnnouncementSpace(scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className={`
          fixed
          ${hideAnnouncementSpace ? "top-3" : "top-[54px]"}
          left-0
          w-full
          z-[999]
          transition-all
          duration-500
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-10
          "
        >
          <div
            className={`
              relative
              flex
              items-center
              justify-between
              h-[68px]
              sm:h-[72px]
              px-4
              sm:px-6
              lg:px-8
              rounded-[24px]
              sm:rounded-[28px]
              transition-all
              duration-500
              border
              ${
                isScrolled
                  ? `
                    bg-white/82
                    backdrop-blur-2xl
                    border-white/70
                    shadow-[0_10px_40px_rgba(15,23,42,0.08)]
                  `
                  : `
                    bg-white/65
                    backdrop-blur-xl
                    border-white/50
                    shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                  `
              }
            `}
          >
            {/* SOFT LIGHT BACKGROUND SHIMMER */}
            <div
              className="
                absolute
                inset-0
                rounded-[24px]
                sm:rounded-[28px]
                bg-gradient-to-r
                from-white/20
                via-white/5
                to-white/20
                pointer-events-none
              "
            />

            {/* BRAND LOGO (Improvement: Wraps cleanly with SPA Link going Home) */}
            <Link to="/">
              <motion.div
                whileHover={{
                  scale: 1.01,
                }}
                className="
                  relative
                  z-20
                  flex
                  items-center
                  gap-3
                  cursor-pointer
                  shrink-0
                "
              >
                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    sm:w-11
                    sm:h-11
                    rounded-full
                    bg-white
                    shadow-[0_8px_20px_rgba(15,23,42,0.06)]
                  "
                >
                  <img
                    src={lukaLogo}
                    alt="Luka"
                    className="
                      w-7
                      sm:w-8
                      object-contain
                    "
                  />
                </div>

                <div className="leading-none">
                  <h2
                    className="
                      text-slate-900
                      text-[20px]
                      sm:text-[24px]
                      font-black
                      tracking-tight
                    "
                  >
                    Luka
                  </h2>
                  <p
                    className="
                      hidden
                      sm:block
                      text-slate-500
                      text-[10px]
                      uppercase
                      tracking-[3px]
                      mt-[3px]
                    "
                  >
                    Luxury Laundry
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* DESKTOP NAVIGATION LINKS (Improvement: React Router SPA Links + Underline Active Tracking) */}
            <div
              className="
                hidden
                lg:flex
                items-center
                gap-8
                xl:gap-10
              "
            >
              {SITE_CONFIG.navLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`
                      relative
                      group
                      text-[15px]
                      font-medium
                      tracking-wide
                      transition-all
                      duration-300
                      ${isActive ? "text-slate-900 font-semibold" : "text-slate-600 hover:text-slate-900"}
                    `}
                  >
                    {item.label}

                    {/* NAV UNDERLINE TRACKER */}
                    <span
                      className={`
                        absolute
                        left-0
                        -bottom-[8px]
                        h-[1.5px]
                        rounded-full
                        bg-slate-900
                        transition-all
                        duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* DESKTOP CTA CONTAINER */}
            <div className="hidden lg:flex items-center gap-3">
              {/* DESKTOP CART ACCESS TOGGLE */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  relative
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  border
                  border-slate-200
                  flex
                  items-center
                  justify-center
                  shadow-[0_10px_25px_rgba(15,23,42,0.06)]
                "
                onClick={() => setCartOpen(true)}
              >
                <ShoppingBag size={20} className="text-slate-700" />

                {cartCount > 0 && (
                  <span
                    className="
                      absolute
                      -top-1
                      -right-1
                      min-w-[20px]
                      h-5
                      px-1
                      rounded-full
                      bg-cyan-500
                      text-white
                      text-[11px]
                      font-bold
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {cartCount}
                  </span>
                )}
              </motion.button>
                <Link to="/account">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-white
                      border
                      border-slate-200
                      flex
                      items-center
                      justify-center
                      shadow-[0_10px_25px_rgba(15,23,42,0.06)]
                    "
                  >
                    <User size={20} className="text-slate-700" />
                  </motion.button>
                </Link>
              {/* SHOP NOW PRIMARY CTA (Improvement: Routed to /products via clear Link) */}
              <Link to="/products">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    relative
                    overflow-hidden
                    flex
                    items-center
                    gap-2
                    px-5
                    xl:px-6
                    py-[13px]
                    rounded-full
                    bg-slate-900
                    text-white
                    text-sm
                    font-semibold
                    shadow-[0_10px_25px_rgba(15,23,42,0.10)]
                    transition-all
                    duration-300
                    hover:shadow-[0_12px_30px_rgba(15,23,42,0.16)]
                  "
                >
                  {/* BUTTON INTERIOR SHINE SHIMMER */}
                  <motion.div
                    animate={{
                      x: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      top-0
                      left-0
                      w-[60px]
                      h-full
                      rotate-12
                      bg-white/10
                      blur-md
                    "
                  />

                  <span className="relative z-10">Shop Now</span>
                  <ArrowRight size={16} className="relative z-10" />
                </motion.button>
              </Link>
            </div>

            {/* MOBILE INTERACTION INTERFACE */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* MOBILE DEDICATED CART ACCESSIBILITY ROW */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setCartOpen(true)}
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  bg-white/70
                  border
                  border-slate-200
                  text-slate-800
                  backdrop-blur-xl
                  shadow-[0_8px_20px_rgba(15,23,42,0.04)]
                "
              >
                <ShoppingBag size={18} className="text-slate-700" />

                {cartCount > 0 && (
                  <span
                    className="
                      absolute
                      -top-1
                      -right-1
                      min-w-[18px]
                      h-4.5
                      px-1
                      rounded-full
                      bg-cyan-500
                      text-white
                      text-[9px]
                      font-bold
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {cartCount}
                  </span>
                )}
              </motion.button>
                {/* User */}
                <Link to="/account">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      rounded-full
                      bg-white/70
                      border
                      border-slate-200
                      text-slate-800
                      backdrop-blur-xl
                      shadow-[0_8px_20px_rgba(15,23,42,0.04)]
                    "
                  >
                    <User size={18} className="text-slate-700" />
                  </motion.button>
                </Link>
              {/* MOBILE MENU HAMBURGER ACTION CONTROLLER */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="
                  relative
                  z-[999]
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  bg-white/70
                  border
                  border-slate-200
                  text-slate-800
                  backdrop-blur-xl
                  shadow-[0_8px_20px_rgba(15,23,42,0.04)]
                "
              >
                {mobileMenu ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE EXPANDABLE MENU DRAWER NAVIGATION */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              top-[108px]
              sm:top-[118px]
              left-0
              w-full
              z-[998]
              px-4
              sm:px-6
              lg:hidden
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[28px]
                border
                border-white/60
                bg-white/85
                backdrop-blur-2xl
                shadow-[0_15px_40px_rgba(15,23,42,0.08)]
              "
            >
              <div
                className="
                  px-6
                  py-8
                  flex
                  flex-col
                  gap-6
                "
              >
                {SITE_CONFIG.navLinks.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileMenu(false)}
                      className={`
                        text-lg
                        font-medium
                        transition-all
                        duration-300
                        ${isActive ? "text-slate-900 font-bold" : "text-slate-700 hover:text-slate-900"}
                      `}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* MOBILE MENU INTERIOR FOOTER CTA */}
                <Link to="/products" onClick={() => setMobileMenu(false)}>
                  <button
                    className="
                      w-full
                      px-6
                      py-4
                      rounded-full
                      bg-slate-900
                      text-white
                      font-semibold
                      shadow-[0_10px_30px_rgba(15,23,42,0.12)]
                    "
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY SYSTEM DRAWER (Professional Approach: Outer z-index container removed) */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      
       {/* <CartDrawer
        open={cartOpen}
        onClose={closeCart}
      /> */}
              
    </>
  );
};

export default Navbar;
