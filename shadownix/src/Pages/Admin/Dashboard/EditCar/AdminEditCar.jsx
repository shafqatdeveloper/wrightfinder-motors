import React, { useEffect, useState } from "react";
import EditCar from "../../../../Components/Admin/EditCar/EditCar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../../../Components/Loader/Loader";

const AdminEditCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  useEffect(() => {
    const fetchCarDetails = async () => {
      const response = await axios.get(`/api/car/details?id=${id}`);
      setCar(response.data.car);
    };
    fetchCarDetails();
  }, []);
  return (
    <div className="my-28">
      {car && car.name ? <EditCar car={car} id={id} /> : <Loader />}
    </div>
  );
};

export default AdminEditCar;
