import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import CarDetails from "./Pages/Details/CarDetails";
import About from "./Pages/About/About";
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard/AdminDashboard";
import AdminAddCar from "./Pages/Admin/Dashboard/AddCar/AdminAddCar";
import "./App.css";
import AdminLogin from "./Pages/Admin/Login/AdminLogin";
import Regsiter from "./Pages/Admin/Regsiter/Regsiter";
import ScrollToTop from "./Components/Scroller/ScrollToTop";
import AdminAllCars from "./Pages/Admin/Dashboard/AllCars/AdminAllCars";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/details/:id" element={<CarDetails />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/add-car" element={<AdminAddCar />} />
          <Route path="/admin/dashboard/all-cars" element={<AdminAllCars />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<Regsiter />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
