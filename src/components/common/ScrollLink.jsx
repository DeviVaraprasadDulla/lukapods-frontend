import { Link, useLocation } from "react-router-dom";

const ScrollLink = ({ to, children, className, ...props }) => {
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === to) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // use "auto" if you don't want animation
      });
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;