import { motion } from "framer-motion";

import { fadeUp } from "@/animations/variants/fadeUp";

const MotionTitle = ({ title }) => {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        text-5xl
        md:text-7xl
        font-black
        tracking-tight
        leading-none
      "
    >
      {title}
    </motion.h2>
  );
};

export default MotionTitle;