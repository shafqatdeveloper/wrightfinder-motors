import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/Scroller/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopLoadingBar from "./Components/Loader/TopLoadingBar";

// Lazy load the components
const Home = lazy(() => import("./Pages/Home/Home"));
const CarDetails = lazy(() => import("./Pages/Details/CarDetails"));
const About = lazy(() => import("./Pages/About/About"));
const AdminDashboard = lazy(() =>
  import("./Pages/Admin/Dashboard/AdminDashboard/AdminDashboard")
);
const AdminAddCar = lazy(() =>
  import("./Pages/Admin/Dashboard/AddCar/AdminAddCar")
);
const AdminLogin = lazy(() => import("./Pages/Admin/Login/AdminLogin"));
const Regsiter = lazy(() => import("./Pages/Admin/Regsiter/Regsiter"));
const AdminAllCars = lazy(() =>
  import("./Pages/Admin/Dashboard/AllCars/AdminAllCars")
);

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <ToastContainer autoClose={2500} />
        <TopLoadingBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/car/details/:id" element={<CarDetails />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/dashboard/add-car" element={<AdminAddCar />} />
            <Route
              path="/admin/dashboard/all-cars"
              element={<AdminAllCars />}
            />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<Regsiter />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
