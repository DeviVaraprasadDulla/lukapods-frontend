import { Outlet } from "react-router-dom";

import AnnouncementBar from "@/components/common/announcement/AnnouncementBar";
import Navbar from "@/components/common/navbar/Navbar";
// import Footer from "@/components/common/footer/Footer";
import Footer from "@/components/common/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <AnnouncementBar />

      <Navbar />

      <main
        className="
          min-h-screen
          pt-[120px]
        "
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
