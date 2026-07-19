const PageLoader = ({ text = "Preparing your experience..." }) => {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-white
      "
    >
      <div className="text-center">

        <img
          src="/images/logo.png"
          alt="LukaPods"
          className="mx-auto h-16 w-auto"
        />

        <div
          className="
            mt-6
            mx-auto

            h-10
            w-10

            rounded-full

            border-4
            border-slate-200
            border-t-[#020817]

            animate-spin
          "
        />

        <p
          className="
            mt-5

            text-sm

            font-medium

            text-slate-500
          "
        >
          {text}
        </p>

      </div>
    </div>
  );
};

export default PageLoader;