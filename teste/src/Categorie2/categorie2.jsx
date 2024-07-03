import React, { useState } from "react";
import NavBare from "../Component/NavBare";
import { useNavigate } from "react-router-dom";
import Image1 from "./image/1.png";
import Image2 from "./image/2.png";
import Image3 from "./image/3.png";
import Image4 from "./image/4.png";
import Image5 from "./image/5.png";
import Image6 from "./image/6.png";
import Lottie from "lottie-react";
import lottieAnimation from "./image/Animation - 1715095980762.json"
import cs from "./image/Animation - 1715097092609.json"
import Physics from "./image/Animation - 1715097625145.json"
import PhyChem from "./image/Animation - 1715097795362.json"
import Chemistry from "./image/Animation - 1715098026739.json"
import MathComp from "./image/Animation - 1715099460173 (1).json"
import SFooter from "../Component/footer";
import NavBareAdmin from "../AdminComponent/NavBareAdmin";

function Categorie2() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate('/Bookcategorie2', { state: {  category } });
  };

  return (
    <><div className='flex overflow-hidden  h-screen overflow-y-auto  ' >{localStorage.getItem("role") === "admin" && <NavBareAdmin />}
    <div className="h-screen w-screen overflow-y-auto" >
      <NavBare />
      <div className="max-sm:grid-rows-6 max-sm:px-3 max-sm:h-[800px] min-
      sm:gap-x-10  overflow-y-auto max-sm:py-10 max-sm:grid-cols-2 min-[540px]:grid-cols-2 min-[540px]:grid-rows-3 min-[540px]:h-[900px]    min-[540px]:pl-16 min-[540px]:py-10 main grid lg:grid-cols-5 lg:grid-rows-2 lg:h-[700px] lg:pl-20 lg:pt-10 grid-cols-5 pl-20 grid-rows-2 h-[600px] bg-[#EBEBEB] pt-10 z-10    ">
        <div className="max-sm:row-start-1 max-sm:col-span-2 max-sm:h-[220px] max-sm:col-start-2 min-[540px]:col-start-2 min-[540px]:row-start-1 min-[540px]:h-[220px] lg:grid-rows-1 lg:h-[250px] lg:col-span-1 lg:col-start-2 lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center lg:row-start-1 col-span-1 col-start-3 w-48 h-[180px] flex flex-col items-center justify-center bg-white rounded-3xl border-2 text-gray-900 ring-3 ring-inset ring-gray-300 drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300 hover:drop-shadow-2xl ">
          <div onClick={() => handleCategoryClick("Mathematics")}>
             <Lottie animationData={lottieAnimation}></Lottie>
            <h5 className="text-[#B80000] text-center  text-xl ">Mathematics</h5>
          </div>
        </div>
        <div className="max-sm:row-start-1 max-sm:col-span-2 max-sm:h-[220px] max-sm:col-start-1 min-[540px]:col-start-1 min-[540px]:row-start-1 min-[540px]:h-[220px] lg:grid-rows-1 lg:h-[250px] lg:col-span-1 lg:col-start-3 lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center lg:row-start-1 col-span-1 col-start-2 w-48 h-[180px] flex flex-col items-center justify-center bg-white rounded-3xl border-2 text-gray-900 ring-3 ring-inset ring-gray-300 drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300 hover:drop-shadow-2xl   ">
          <div onClick={() => handleCategoryClick("Computer Science")}>
          <Lottie animationData={cs}  className="h-[180px]" ></Lottie>

            <h5 className="text-[#B80000] text-center mt-2 text-xl ">Computer Science </h5>
          </div>
        </div>
        <div className="max-sm:row-start-3 max-sm:col-span-2 max-sm:h-[220px] max-sm:col-start-1 min-[540px]:col-start-1 min-[540px]:row-start-2 min-[540px]:h-[220px] lg:grid-rows-1 lg:h-[250px] lg:col-span-1 lg:col-start-4 lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center lg:row-start-1 col-span-1 col-start-4 w-48 h-[180px] flex flex-col items-center justify-center bg-white rounded-3xl border-2 text-gray-900 ring-3 ring-inset ring-gray-300 drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300 hover:drop-shadow-2xl   ">
    <div onClick={() => handleCategoryClick("Chemistry")}>
      {/* Add image for the category */}
      <Lottie animationData={Chemistry}></Lottie>
      {/* Add category name */}
      <h5 className="text-[#B80000] text-center mt-2 text-xl  ">Chemistry</h5>
    </div>
  </div>
  <div className="max-sm:row-start-3 max-sm:col-span-2 max-sm:h-[220px] max-sm:col-start-2 min-[540px]:col-start-2 min-[540px]:row-start-2 min-[540px]:h-[220px] lg:grid-rows-2 lg:h-[250px] lg:col-span-1 lg:col-start-2 lg:w-48 lg:flex lg:flex-col lg:items-center  lg:justify-center lg:row-start-2 col-span-1 col-start-2 w-48 h-[180px] flex flex-col items-center justify-center bg-white rounded-3xl border-2 text-gray-900 ring-3 ring-inset ring-gray-300 drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300 hover:drop-shadow-2xl ">
    <div onClick={() => handleCategoryClick("Physics")}>
      {/* Add image for the category */}
      <Lottie animationData={Physics}  className=" sm:h-[200px]  " ></Lottie>
      {/* Add category name */}
      <h5 className="text-[#B80000] text-center text-xl ">Physics</h5>
    </div>
  </div>
  <div className="max-sm:row-start-5 max-sm:col-span-2 max-sm:h-[220px] max-sm:col-start-1 min-[540px]:col-start-1 min-[540px]:row-start-3 min-[540px]:h-[220px] lg:grid-rows-2 lg:h-[250px] lg:col-span-1 lg:col-start-3 lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center lg:row-start-2 col-span-1 col-start-3 w-48 h-[180px] flex flex-col items-center justify-center bg-white rounded-3xl border-2 text-gray-900 ring-3 ring-inset ring-gray-300 drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300 hover:drop-shadow-2xl ">
    <div onClick={() => handleCategoryClick("Computer Science")}>
      {/* Add image for the category */}
      <Lottie animationData={MathComp}></Lottie>

      {/* Add category name */}
      <h5 className="text-[#B80000] text-center mt-2 text-xl   ">Math&Comp</h5>
    </div>
  </div>
  <div className="max-sm:row-start-5 max-sm:col-span-2 max-sm:h-[220px] max-sm:col-start-2 min-[540px]:col-start-2 min-[540px]:row-start-3 min-[540px]:h-[120px] lg:grid-rows-2 lg:h-[250px] lg:col-span-1 lg:col-start-4 lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center lg:row-start-2 col-span-1 col-start-4 w-48 h-[180px] flex flex-col items-center justify-center bg-white rounded-3xl border-2 text-gray-900 ring-3 ring-inset ring-gray-300 drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300 hover:drop-shadow-2xl ">
    <div onClick={() => handleCategoryClick("Phisique&chimique")}>
      {/* Add image for the category */}
      <Lottie animationData={PhyChem}></Lottie>
      {/* Add category name */}
      <h5 className="text-[#B80000] text-center mt-2 text-xl  ">Phy&Chem</h5>
    </div>
    
  </div>
  
      </div>
      
      
      
      
      </div>
      </div>
    </>
  );
}

export default Categorie2;
