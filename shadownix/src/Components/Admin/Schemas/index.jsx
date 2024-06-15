import * as Yup from "yup";

export const AddCarSchema = Yup.object({
  name: Yup.string().min(3).max(70).required("Enter Car Name/Model/Year"),
  miles: Yup.number().min(0).required("Miles are Required"),
  title: Yup.string().min(2).max(50).required("Please Select a Title"),
  style: Yup.string().min(2).max(50).required("Please Select a Style"),
  engine: Yup.string().min(2).max(50).required("Please Enter Engine"),
  transmission: Yup.string().min(2).required("Please Select Transmission"),
  power: Yup.string().min(2).required("Please Select Power Option"),
  fuelType: Yup.string().min(2).required("Please Select Fuel Type"),
  seats: Yup.string().min(2).max(20).required("Please Select Seats"),
  driveline: Yup.string().min(2).max(20).required("Please Select Driveline"),
  interiorColor: Yup.string().min(2).required("Please Select intertot Color"),
  exteriorColor: Yup.string().min(2).required("Please Select Exterior Color"),
  description: Yup.string().min(2).required("Please Enter Car Description"),
  price: Yup.string().min(2).max(100000000).required("Price is Required"),
});
