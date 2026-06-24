import { motion } from "framer-motion";

const BlogContentRenderer = ({ content }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        blog-content
        relative
      "
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};

export default BlogContentRenderer;
