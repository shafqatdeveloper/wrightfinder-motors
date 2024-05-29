import React, { useEffect, useState } from "react";
import Details from "../../Components/Details/Details";
import { useParams } from "react-router-dom";
import axios from "axios";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  useEffect(() => {
    const fetchCarDetails = async () => {
      const response = await axios.get(`/api/car/details?id=${id}`);
      setCar(response.data.car);
    };
    fetchCarDetails();
  }, []);
  return <div className="bg-gray-200">{car && <Details car={car} />}</div>;
};

export default CarDetails;
