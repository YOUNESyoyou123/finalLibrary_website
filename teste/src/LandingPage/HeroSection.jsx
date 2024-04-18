import React, { useContext } from "react";
import Lottie from "lottie-react";
import HeroAnimation from "../assets/images/HeroAnimation.json";
import { ScrollContext } from "../Component/Home";
import { MenuContext } from "../Component/NavBare";

function HeroSection() {
  const { gotoAboutUs, goToSearchBook } = useContext(ScrollContext);
  // const {menu,setmenu} = useContext(MenuContext);
  // console.log(setmenu)
  return (
    
    <div c  lassName="flex justify-center px-10  ">
      <div className="flex flex-col-reverse md:flex-row px-4 md:px-12    xl:scale-105">
        <div className="flex flex-col justify-center items-center md:items-start w-full sm:w-3/4 md:px-12 pt-2 md:pt-10 mt-10 md:mt-0 ">
          <h1 className="text-red-700 text-3xl font-semibold py-1 text-center md:text-left">
            Welcome To Library Lane
          </h1>
          <p className="font-semibold text-gray-700 max-w-lg px-2 py-3 r md:text-left     text-start">
            Welcome to our library dedicated to supporting the academic pursuits
            of students and faculty in the Sciences faculty. At our library, we
            strive to provide a comprehensive collection of books, research
            papers, and resources focused on computer science, mathematics, and
            chemistry all this in your home.
          </p>
          <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-start">
            <button
              className="py-1 border mt-2 bg-red-700 text-white font-bold text-center px-3 rounded-md"
              onClick={goToSearchBook}
            >
              Get Started
            </button>
            <button
              className="py-1 border mt-2 hover:bg-red-700 hover:text-white text-black font-bold text-center px-4 rounded-md"
              onClick={gotoAboutUs}
            >
              About Us
            </button>
          </div>
        </div>

        <div className=" ">
          <div className="flex   mt-6 md:mt-0    ">
            <Lottie
              animationData={HeroAnimation}
              loop={true}
              className="w-full md:w-auto max-w-sm md:max-w-none      "
              style={{zIndex:-1}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
