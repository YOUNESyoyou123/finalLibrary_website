import React, { useContext } from "react";
import HomeBg from "../assets/images/luisa-brimble-VfHoMBagDPc-unsplash.jpg";
import { ScrollContext } from "./Home";
import { useSpring } from "react-spring";
import { animated } from "react-spring";
import BooksImgAboutUs from "../assets/images/booook.jpg";
import AboutUsImg from "../assets/images/AboutUsImg.jpg";
import { useEffect } from "react";

export default function AboutUs() {
  const { gotoAboutUs, goToSearchBook, isVisible } = useContext(ScrollContext);
  //only working in large devices remember to make responsive to oother devices Creat some break point and test with the width of devices
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(100%)",
    config: { delay: 20000 },
  });

  const configue2 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(100%)",
    config: { delay: 20000 },
  });
  const fadeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
  });

  // handlE Scrolle

  function handleScroll(event) {
    event.preventDefault();
  }

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <animated.div style={springProps}>
          <div className="flex flex-col  sm:flex-row sm px-10  xl:justify-center h-[360px] xl:items-center gl:scale-120 xl:scale-95 xl:px-20">
            <div className="px-4 py-4 xl:w-11/12">
              <h1 className="text-3xl font-semibold py-2 sm:px-10    ">
                About Us
              </h1>
              <p className="text-black text-[18px] font-medium w-auto sm:px-10">
                Explore our incredible collection of books, brimming with
                literary treasures and diverse knowledge, and borrow them online
                with just a few clicks. Whether you're passionate about timeless
                classics or curious about the latest research advancements, our
                virtual library has everything you need to excel in your studies
                and broaden your intellectual horizons. Join us now to enrich
                your mind, discover new frontiers, and quench your thirst for
                knowledge. Let the adventure of learning begin today!
              </p>
            </div>
            <div className=" px-4  flex items-center  ">
              <img
                src={AboutUsImg}
                alt="About us img"
                className="  rounded-md  sm:rouned-xl sm:w-[2000px]   sm:mr-96  mt-5 xl:rounded-[40px] xl:w-[900px] xl:px-10  "
              />
            </div>
          </div>
        </animated.div>

        <animated.div style={configue2}>
          <div className="flex flex-col  sm:flex-row-reverse  py-5 sm px-10 h-[420px] xl:rounded-[50px]  xl:justify-center xl:items-center gl:scale-120 xl:scale-95 xl:px-20 ">
            <div className="px-4 py-4 xl:w-11/12">
              <h1 className="text-3xl font-semibold py-2 sm:px-10    ">
                Explore more than +1000 Book{" "}
              </h1>
              <p className="text-black font-medium w-auto  text-[18px] sm:px-10">
                Explore our incredible collection of books, brimming with
                literary treasures and diverse knowledge, and borrow them online
                with just a few clicks. Whether you're passionate about timeless
                classics or curious about the latest research advancements, our
                virtual library has everything you need to excel in your studies
                and broaden your intellectual horizons. Join us now to enrich
                your mind, discover new frontiers, and quench your thirst for
                knowledge. Let the adventure of learning begin today!
              </p>
            </div>
            <div className=" px-4 flex items-center   ">
              <img
                src={BooksImgAboutUs}
                alt="About us img"
                className="  rounded-md  sm:rouned-md sm:w-[1000px]   sm:mr-96  mt-5 xl:w-[900px]  xl:px-10 "
              />
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
}
