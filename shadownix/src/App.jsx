import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/Scroller/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopLoadingBar from "./Components/Loader/TopLoadingBar";
import Home from "./Pages/Home/Home";
import CarDetails from "./Pages/Details/CarDetails";
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard/AdminDashboard";
import AdminAddCar from "./Pages/Admin/Dashboard/AddCar/AdminAddCar";
import AdminAllCars from "./Pages/Admin/Dashboard/AllCars/AdminAllCars";
import AdminLogin from "./Pages/Admin/Login/AdminLogin";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <ToastContainer autoClose={2500} />
        <TopLoadingBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/details/:id" element={<CarDetails />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/add-car" element={<AdminAddCar />} />
          <Route path="/admin/dashboard/all-cars" element={<AdminAllCars />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* <Route path="/admin/register" element={<Regsiter />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
