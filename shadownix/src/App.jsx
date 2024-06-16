import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import ScrollToTop from "./Components/Scroller/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopLoadingBar from "./Components/Loader/TopLoadingBar";
import Home from "./Pages/Home/Home";
import Loader from "./Components/Loader/Loader";
import { useCookies } from "react-cookie";
import CookieConsent from "./Components/Cookie/CookieConsent";
import Cookie from "./Pages/Policy/Cookie";
import Privacy from "./Pages/Policy/Privacy";
import Terms from "./Pages/Policy/Terms";
import AdminInfo from "./Pages/Admin/Information/AdminInfo";
import Regsiter from "./Pages/Admin/Regsiter/Regsiter";
import UpdateAdmin from "./Pages/Admin/UpdateProfile/UpdateAdmin";
import AdminEditCar from "./Pages/Admin/Dashboard/EditCar/AdminEditCar";
import ForgetPassword from "./Pages/Admin/PasswordManagement/ForgetPassword";

// import Footer from "./Components/Footer/Footer";
// const WhyUs = lazy(() => import("../../Components/WhySchooseUs/WhyUs"));
// import CarDetails from "./Pages/Details/CarDetails";
// import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard/AdminDashboard";
// import AdminAddCar from "./Pages/Admin/Dashboard/AddCar/AdminAddCar";
// import AdminAllCars from "./Pages/Admin/Dashboard/AllCars/AdminAllCars";
// import AdminLogin from "./Pages/Admin/Login/AdminLogin";
// import About from "./Pages/About/About";
const Footer = lazy(() => import("./Components/Footer/Footer"));
const CarDetails = lazy(() => import("./Pages/Details/CarDetails"));
const AdminDashboard = lazy(() =>
  import("./Pages/Admin/Dashboard/AdminDashboard/AdminDashboard")
);
const AdminAddCar = lazy(() =>
  import("./Pages/Admin/Dashboard/AddCar/AdminAddCar")
);
const AdminAllCars = lazy(() =>
  import("./Pages/Admin/Dashboard/AllCars/AdminAllCars")
);
const AdminLogin = lazy(() => import("./Pages/Admin/Login/AdminLogin"));
const About = lazy(() => import("./Pages/About/About"));

function App() {
  const [cookies] = useCookies(["cookieConsent"]);
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <ToastContainer autoClose={12000} />
        <TopLoadingBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/car/details/:id" element={<CarDetails />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/dashboard/add-car" element={<AdminAddCar />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/admin/dashboard/edit-car/:id"
              element={<AdminEditCar />}
            />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/admin/dashboard/all-cars"
              element={<AdminAllCars />}
            />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<Regsiter />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/password/reset" element={<ForgetPassword />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/cookie-policy" element={<Cookie />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/terms-and-conditions" element={<Terms />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/info" element={<AdminInfo />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/info/edit" element={<UpdateAdmin />} />
          </Routes>
        </Suspense>
        {!cookies.cookieConsent && <CookieConsent />}
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
