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
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <ToastContainer autoClose={2500} />
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
              path="/admin/dashboard/all-cars"
              element={<AdminAllCars />}
            />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
        {/* <Route path="/admin/register" element={<Regsiter />} /> */}
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
