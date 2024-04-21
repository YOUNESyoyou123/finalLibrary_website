import React from "react";
import { ReactDOM } from "react";
import NavBareAdmin from "./NavBareAdmin";
import Home from "../Component/Home";

export default function HomePage()
{
    return(
      <>
        <div  className=" flex ">
          <NavBareAdmin/>
           <div className=" relative w-screen  overflow-hidden   "  style={{ overflow: 'hidden' }}> 
            <Home />
            <h1 className=" top-32 left-24  animate-pulse  text-red-700  font-bold">Student View</h1>
           </div> 
          </div>
      </>
    )

}