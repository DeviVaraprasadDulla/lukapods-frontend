import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Package,
  HelpCircle,
  ChevronRight,
  LogOut,
} from "lucide-react";

import { getCurrentUser, logoutUser } from "@/api/authApi";

const Account = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const loadUser = async () => {
    try {
      const data = await getCurrentUser();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const menuItems = [
    {
      title: "My Orders",
      description: "Track your recent purchases",
      icon: Package,
      link: "/my-orders",
    },
    {
      title: "Help & Support",
      description: "We're here whenever you need us",
      icon: HelpCircle,
      link: "/contact",
    },
  ];

  return (
    <main
      className="
        min-h-screen

        bg-gradient-to-b
        from-[#F8FBFF]
        via-white
        to-[#EDF6FF]

        pt-24
        pb-20
      "
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Heading */}

        <div className="text-center mb-10">

          <h1
            className="
              text-3xl
              md:text-4xl
              font-black
              text-[#020817]
            "
          >
            My Account
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your LukaPods account
          </p>

        </div>

        {/* Profile */}

        <div
          className="
            rounded-[32px]

            bg-white/90

            backdrop-blur-xl

            border
            border-white/60

            shadow-[0_25px_60px_rgba(15,23,42,0.08)]

            p-8
          "
        >
          <div
            className="
              flex
              flex-col
              sm:flex-row

              items-center

              gap-5

              text-center
              sm:text-left
            "
          >

            <div
              className="
                h-24
                w-24

                rounded-full

                bg-gradient-to-br
                from-cyan-500
                to-blue-600

                flex
                items-center
                justify-center

                text-white

                text-4xl

                font-black

                shadow-lg
              "
            >
              {user?.username?.charAt(0).toUpperCase()}
            </div>

            <div className="text-center sm:text-left">



              <p
                className="
                  mt-1

                  text-sm
                  text-slate-500

                  break-words
                  max-w-full
                "
              >
                {user?.email}
              </p>

              <span
                className="
                  inline-flex
                  mt-4

                  rounded-full

                  bg-cyan-50

                  px-4
                  py-2

                  text-sm

                  font-semibold

                  text-cyan-700
                "
              >
                LukaPods Member
              </span>

            </div>

          </div>
        </div>

        {/* Menu */}

        <div className="space-y-5 mt-8">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.link}
                className="
                  flex
                  items-center

                  rounded-[28px]

                  bg-white

                  border

                  p-6

                  shadow-sm

                  hover:shadow-xl

                  transition-all

                  duration-300
                "
              >

                <div
                  className="
                    h-14
                    w-14

                    rounded-2xl

                    bg-gradient-to-br
                    from-cyan-500
                    to-blue-600

                    flex
                    items-center
                    justify-center

                    text-white

                    shadow-lg
                  "
                >
                  <Icon size={24} />
                </div>

                <div className="ml-5 flex-1">

                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[#020817]
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.description}
                  </p>

                </div>

                <ChevronRight
                  className="
                    text-slate-400
                  "
                  size={22}
                />

              </Link>
            );
          })}

        </div>

        {/* Logout */}

        <button
          onClick={async () => {
            try {
              await logoutUser();
              navigate("/login", {
                replace: true,
              });
            } catch (error) {
              console.error(error);
            }
          }}
          className="
            mt-10

            w-full

            h-14

            rounded-2xl

            border
            border-red-200

            bg-white

            text-red-600

            font-semibold

            flex
            items-center
            justify-center

            gap-3

            hover:bg-red-50

            transition
          "
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>
    </main>
  );
};

export default Account;