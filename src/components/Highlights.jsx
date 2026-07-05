import { motion } from "framer-motion";

const items = [
  "🚚 Free Shipping on Orders Over $50",
  "⭐ Rated 4.8 by Thousands of Customers",
  "🎁 1M+ Toys Delivered Nationwide",
  "😊 Trusted by 750,000+ Families",
];
const Highlights = () => {
  return (
    <div className="mt-6 md:mt-8">
      {/* CONTAINER ALIGNMENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* STRIP 1 */}
{/* STRIP 1 */}
            <div
              className="rotate-[-1deg] py-1.5 rounded-md overflow-hidden shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #1D4ED8 0%, #2563EB 40%, #38BDF8 100%)",
              }}
            >          
            <motion.div
            className="flex gap-10 text-white text-sm font-medium whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {[...items, ...items].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </motion.div>
        </div>

        {/* STRIP 2 */}
        {/* STRIP 2 */}
            <div
              className="rotate-[1deg] mt-2 py-1.5 rounded-md overflow-hidden shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #0F172A 0%, #1E40AF 55%, #2563EB 100%)",
              }}
            >
          <motion.div
            className="flex gap-10 text-white text-sm font-medium whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {[...items, ...items].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
