import React from "react";
import { useEffect } from "react";
import NavBareAdmin from "./NavBareAdmin";
import BooksData from "../assets/images/BooksData.json";
import StudentAnimation from "../assets/images/StudentAnimation.json";
import Lottie from "lottie-react";
import AdminAnimation from "../assets/images/Admin.json";
import DataDashbord from "./DataDashbord";
import axios from "axios";

function ReturnTransiction() {

  const handleData = async (e) => {
   
  
    try {
      const response = await axios.get("http://localhost:3000/borrowbook/getborrowed");
      console.log("Data retrieved successfully:", response.data);
      // Handle the retrieved data as needed (e.g., update UI, set state, etc.)
    } catch (error) {
      console.error("Error retrieving data:", error);
      // Handle network or server errors (e.g., display error message)
    }
  };
  
  
  useEffect(() => {
    handleData()
  }, []);

  return (
    <>
      {/* bg-[#222831] */}
      <div className=" flex h-full bg-gray-900 ">
        <NavBareAdmin />
        <div className="flex flex-col">
          <div className="flex justify-center px-20  mt-5 gap-5 text-white">
            <div className="px-20  h-20 pt-3 rounded-md  bg-[#FC819E]">
              <div className="flex  items-center ">
                <p className="font-semibold mt-2">Books</p>
                <Lottie
                  animationData={BooksData}
                  className="w-8"
                  loop={true}
                ></Lottie>
              </div>

              <span className=" text-center ml-3 font-bold text-black">
                1000
              </span>
            </div>
            <div className="px-20  h-20 pt-3 rounded-md bg-[#FEC7B4]">
              <div className="flex">
                <p className="font-semibold mt-2">Student</p>
                <Lottie
                  animationData={StudentAnimation}
                  className="w-6"
                ></Lottie>
              </div>
              <span className=" text-center ml-5 font-bold text-black">
                400
              </span>
            </div>
            <div className="px-20  h-20 pt-[18px] rounded-md bg-[#FF8E8F]">
              <div className="flex">
                <p className="font-semibold">Admins</p>
                <Lottie animationData={AdminAnimation} className="w-6"></Lottie>
              </div>

              <span className=" text-center ml-6 font-bold text-black">4</span>
            </div>
          </div>
          <div>
            <DataDashbord />
          </div>
        </div>
      </div>
    </>
  );
}
export default ReturnTransiction;
