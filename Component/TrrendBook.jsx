import React from "react";
import Slide from "./Slide";
import Search from "./SearchBare";
import DownAroow from "../assets/images/down-arrow-svgrepo-com.svg";
import { useContext } from "react";
import { ScrollContext } from "./Home";



function TrendsBooks()
{
    const {gotoAboutUs,goToSearchBook} = useContext(ScrollContext)
    return(
        <>
         <div className="xl:scale-100">
              <div>
                <div className="flex items-center justify-center mt-4 pt-3">
                  <h1 className="text-2xl ls leading-xl mt-2 font text-center text-pretty">
                    Bienvenue à La Bibliothèque <br />
                    <span className="text-red-700">
                      De La Faculté Des Sciences
                    </span>
                  </h1>
                </div>
                <Search />
              </div>
              <div className="mt-5">
                <h1 className="text-center text-[20px] font-semibold pb-2 ">
                  Livres tendances
                </h1>
                <Slide />
                <div className="flex items-center justify-center mt-5 py-2">
                  <button className="py-2 text-center text-white mt-2 px-5 rounded-md bg-red-700  flex justify-center item-center  hover:bg-red-600">
                    See more
                  </button>
                </div>
                <div className="flex justify-center items-center py-2">
                  <button className=" text-center flex justify-center item-center pb-2 sm:mt-4 ">
                    {" "}
                    <img
                      src={DownAroow}
                      alt=""
                      width={30}
                      className=" animate-bounce"
                      onClick={gotoAboutUs}
                    />
                  </button>
                </div>
              </div>
            </div></>
    )
}
export default TrendsBooks