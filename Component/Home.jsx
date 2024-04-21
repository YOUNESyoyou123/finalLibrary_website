import React, { useRef, useEffect, useState } from "react";
import NavBare from "./NavBare";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "react-spring";
import HeroSection from "../LandingPage/HeroSection";
import { createContext } from "react";
import { Hidden } from "@mui/material";
import TrendsBooks from "./TrrendBook";
import AboutUs from "./AboutUs";
// ScrollContext passing the  value scrolled  to the about us   compt

export const ScrollContext = createContext();
 
function Home(props) {
  const parallaxRef = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isVisible, setIsVisible] = useState(false);
  // const pages = height < 1000 ? 3.5 : 2.5;
  const pages = 3.5;
  // const trendBooksOffset = width < 500 ? 1.2 : 0.9999;
  const trendBooksOffset = 1;
  // const aboutUsOffset = width < 500 ? 2.19999 : 1.9999;
  const aboutUsOffset = 2;
  const gotoAboutUs = () => {
    setIsVisible(true);
    parallaxRef.current.scrollTo(aboutUsOffset + 0.02);
  };

  const goToSearchBook = () => {
    parallaxRef.current.scrollTo(trendBooksOffset + 0.2);
  };

  const NumberPages = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    addEventListener("resize", NumberPages);
    return () => removeEventListener("resize", NumberPages);
  }, [width]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Parallax pages={pages} ref={parallaxRef} style={{ overflow: Hidden }}>
        <ScrollContext.Provider
          value={{ gotoAboutUs, goToSearchBook, isVisible }}
        >
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={1}
            className="bg-[#FBFBFB]"
          >
            <NavBare />
            <section className="mt-10 xl:mt-40    ">
              <HeroSection />
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={trendBooksOffset}
            speed={0.3}
            factor={1}
            className="mt-40"
          >
            <TrendsBooks />
          </ParallaxLayer>

          <ParallaxLayer offset={aboutUsOffset} speed={0.3} factor={1}>
            <AboutUs />
          </ParallaxLayer>
        </ScrollContext.Provider>
      </Parallax>
    </div>
  );
}

export default Home;
