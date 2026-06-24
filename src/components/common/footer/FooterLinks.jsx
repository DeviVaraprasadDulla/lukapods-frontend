import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      {
        label: "Home",
        path: "/",
      },
      {
        label: "About",
        path: "/about",
      },
      {
        label: "Blogs",
        path: "/blogs",
      },
      {
        label: "Products",
        path: "/products",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        label: "Innovation",
        path: "/about",
      },
      {
        label: "Research",
        path: "/blogs",
      },
      {
        label: "Contact",
        path: "/contact",
      },
      {
        label: "Privacy",
        path: "/privacy",
      },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-10
      "
    >
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h4
            className="
              text-sm
              font-black
              uppercase
              tracking-[0.25em]
              text-white
            "
          >
            {section.title}
          </h4>

          <div className="mt-7 space-y-5">
            {section.links.map((link) => (
              <motion.div
                key={link.label}
                whileHover={{
                  x: 4,
                }}
              >
                <Link
                  to={link.path}
                  className="
                    text-[15px]
                    text-slate-400
                    transition-all
                    duration-300
                    hover:text-cyan-300
                  "
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;