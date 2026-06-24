const Section = ({
  children,
  className = "",
}) => {
  return (
    <section
      className={`relative py-24 overflow-hidden ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;