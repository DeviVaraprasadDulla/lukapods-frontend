import {
  Package,
  MapPin,
  User,
  Lock,
  Heart,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "@/api/authApi";
import { Link } from "react-router-dom";

const Account = () => {
  // Replace with actual user data later
const navigate = useNavigate();
const [user, setUser] = useState({
  username: "",
  email: "",
});
useEffect(() => {
  loadUser();
}, []);
useEffect(() => {
  const loadUser = async () => {
    try {
      const data = await getCurrentUser();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  loadUser();
}, []);
const loadUser = async () => {
  try {
    const data = await getCurrentUser();
    setUser(data);
  } catch (error) {
    console.error(error);
  }
};
  const menuItems = [
    {
      title: "My Orders",
      description: "Track, return or reorder products",
      icon: Package,
      link: "/my-orders",
    },
   
    {
      title: "Help & Support",
      description: "Need help? Contact us",
      icon: HelpCircle,
      link: "/contact",
    },
  ];

  return (
    <main className="min-h-screen bg-[#edf3f8] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-5">

        <h1 className="text-4xl font-black text-slate-900 mb-8">
          My Account
        </h1>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-sm p-8 flex items-center gap-6">

          <div className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center text-3xl font-bold">
           {user?.username?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {user?.username}
            </h2>

            <p className="text-slate-500 mt-1">
              {user?.email}
            </p>
          </div>

        </div>

        {/* Menu */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.link}
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                  group
                "
              >
                <div className="flex items-center">

                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center">
                    <Icon size={24} className="text-slate-700" />
                  </div>

                  <div className="ml-5 flex-1">
                    <h3 className="font-bold text-lg text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      {item.description}
                    </p>
                  </div>

                  <ChevronRight
                    className="text-slate-400 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />

                </div>
              </Link>
            );
          })}
        </div>

        {/* Logout */}
                <button
                onClick={async () => {
                    try {
                    await logoutUser();
                    setUser(null);
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
                    bg-red-50
                    text-red-600
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-3
                    hover:bg-red-100
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