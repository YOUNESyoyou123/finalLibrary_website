import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import homeLogo from "../assets/images/homelogo.svg";
import Datalogo from "../assets/images/Data.svg";
import ManagerLogo from "../assets/images/Manage.svg";
import BooksLogo from "../assets/images/BooksLogo.svg";
import Lottie from "lottie-react";
import lottieAnimation from "../assets/images/AdminAnimation.json";
import TransferLogo from "../assets/images/Transfer.svg";
import { Link } from "react-router-dom";



function NavBareAdmin() {
  return (
    <>
      <div className="flex w-1/4 bg-[#EEEEEE]  px-2  h-screen shadow-lg shadow-gray-200 ">
        <div className="  text-[#222831]  font-semibold  inline-flex-col px-2 py-2 flex-flex-col mt-40 ml-4   ">
          <h1 className="text-2xl pb-5 text-red-700 font-semibold w-auto font-serif">
            Library Lane
          </h1>
          <div className="flex  items-center gap-1  ml-1">
            <img src={homeLogo} width={16} className="mt-[1px]" />
            <Link to="/Admin/HomePage">
              {" "}
              <p className="py-2 pb-1 ml-[1px]">Home</p>
            </Link>
          </div>
          <div className="flex  items-center gap-1 ">
            <img src={Datalogo} width={20} className="mr-" />
            <Link to="/Admin/LibraryData">
              {" "}
              <p className="py-2 pb-1 ">Library Data</p>{" "}
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <img src={ManagerLogo} width={20} />
            <Link to="/Admin/ManageStudent">
              {" "}
              <p className="py-2 pb-1">Manage Student</p>
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <img src={BooksLogo} alt="bookslogo" width={16} />
            <Link to="/Admin/ManageBooks">
              {" "}
              <p className="py-2 pb-1">Manage Books</p>
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <img src={TransferLogo} alt="transferLogo" width={20} />
            <Link to="/Admin/ReturnTransiction">
              {" "}
              <p className="py-2 pb-1">Return Transiction</p>
            </Link>
          </div>
          <div className="mt-10 mr-10">
            <Lottie animationData={lottieAnimation}></Lottie>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBareAdmin;
