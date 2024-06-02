import React from "react";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoDocument } from "react-icons/io5";
import { SlSpeedometer } from "react-icons/sl";
import { MdEventSeat } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import driveLine from "../../assets/driveline.png";
import { Link } from "react-router-dom";
import { PiEngine } from "react-icons/pi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Card = ({ car, delay = 0 }) => {
  // const [hasAnimated, setHasAnimated] = useState(false);
  // const controls = useAnimation();
  // const { ref, inView } = useInView();
  // useEffect(() => {
  //   if (inView && !hasAnimated) {
  //     controls.start("visible");
  //     setHasAnimated(true);
  //   }
  // }, [inView, hasAnimated, controls]);

  const api_Url = import.meta.env.VITE_API_URL;

  // const variants = {
  //   hidden: { opacity: 0, y: 70 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  // };
  return (
    <div className="">
      <Link
        className="bg-white cursor-pointer hover:shadow-xl duration-200 transition-all rounded-md p-3 flex flex-col gap-4"
        to={`/car/details/${car._id}`}
      >
        <div className="w-full overflow-hidden relative rounded-md h-full">
          {car.available === true ? (
            <span className="absolute z-20 bg-black/80 rounded-md py-1.5 px-4 top-3 right-3 text-white">
              AV
            </span>
          ) : (
            <span className="absolute z-20 bg-black/80 rounded-md py-1.5 px-4 top-3 right-3 text-white">
              SOLD
            </span>
          )}
          {car && car.galleryImagesArray && (
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
                clickable: true,
              }}
              slidesPerView={1}
              observer={true}
              loop={true}
              className="flex items-center justify-center w-full"
              watchSlidesProgress={true}
            >
              {car.galleryImagesArray.map((singleImage, index) => (
                <div>
                  <SwiperSlide key={index} className="rounded-md">
                    <div className="w-full h-[32vh] overflow-hidden rounded-md flex items-center justify-center">
                      <img
                        className="h-full object-center w-full rounded-md hover:scale-125 duration-200 transition-all"
                        src={`${api_Url}/uploads/${singleImage.imageName}`}
                        alt={`${api_Url}/uploads/${singleImage.imageName}`}
                      />
                    </div>
                  </SwiperSlide>
                  <div className="flex items-center justify-center w-full text-gray-900 dark:text-gray-100 gap-10 py-10 pt-10">
                    <div className="prev-btn bg-[#fff] dark:bg-dark-2 rounded-full h-8 w-8 flex justify-center shadow-lg items-center cursor-pointer">
                      <BsArrowLeft className="hover:scale-125 active:scale-100 transition-all duration-300" />
                    </div>
                    <div className="next-btn bg-[#fff] dark:bg-dark-2 rounded-full h-8 w-8 flex justify-center shadow-lg items-center cursor-pointer">
                      <BsArrowRight className="hover:scale-125 active:scale-100 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </Swiper>
          )}
        </div>
        <h1 className="text-lg font-bold">{car.name}</h1>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <div className="grid grid-cols-3 gap-4 text-sm capitalize text-gray-500 font-semibold">
          <span className="flex items-center gap-1">
            <PiEngine size={20} />
            <h6 className="">{car.engine}</h6>
          </span>
          <span className="flex items-center gap-1">
            <MdEventSeat size={20} />
            <h6 className="">{car.seats}</h6>
          </span>
          <span className="flex items-center gap-1">
            <img src={driveLine} alt="driveline" className="w-4 h-4" />
            <h6 className="">{car.driveline}</h6>
          </span>
          <span className="flex items-center gap-1">
            <SlSpeedometer size={20} />
            {car.miles}
          </span>
          <span className="flex items-center gap-1">
            <TbAutomaticGearbox size={20} />
            {car.transmission}
          </span>
          <span className="flex items-center gap-1">
            <IoDocument size={20} />
            {car.title}
          </span>
        </div>
        <div className="bg-gray-100 py-2 pl-1 pr-3 flex items-center justify-between rounded-md">
          <span className="text-lg font-bold tracking-wide font-sans">
            Price :
          </span>
          <span>
            <h1 className="text-lg font-bold text-[#3c2163] tracking-wide font-sans">
              <span className="text-xl">$ </span>
              {car.price}
            </h1>
          </span>
        </div>
        <div className="w-full border-2 border-[#3c2163] text-white transition-all duration-300 rounded-md text-center py-2 text-lg font-medium tracking-wide font-sans bg-[#3c2163] hover:bg-[#17A8E2] hover:border-[#17A8E2]">
          <button className="w-full">Explore</button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
