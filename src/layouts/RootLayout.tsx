import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/shared/Navbar";
import { Footer } from "../components/shared/Footer";
import { Banner } from "../components/home/Banner";
import { Newsletter } from "../components/home/Newsletter";

export const RootLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="h-screen flex flex-col font-montserrat">
      <Navbar />
      {pathname === "/" && <Banner />}
      <main className=" px-5 lg:px-12  my-8 flex-1 w-full">
        <Outlet />
      </main>
      {pathname === "/" && <Newsletter />}
      {true && <Sheet />}
      <Footer />
    </div>
  );
};
