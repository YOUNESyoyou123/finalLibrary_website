import React, { useRef, useState } from "react";
import {useCookies} from 'react-cookie'
import { motion } from "framer-motion"
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginImg from "../assets/images/booooook.png";
import { BrowserRouter, Routes, Route, Link, useFetcher } from 'react-router-dom'; // Importing Link from react-router-dom
import NavBare from "../Component/NavBare";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail, MdImportExport } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import Pixelimage from "../assets/images/luisa-brimble-VfHoMBagDPc-unsplash.jpg"
import useFetch from "use-http";
import axios from 'axios';
import { scroll } from "framer-motion/dom"
import ManageStudent from "../AdminComponent/ManageStudent"
import { Button, message } from 'antd';


function Login() {
//  const { post } = useFetch('http://localhost:3000');
//const {get , post , response, loading , error} =useFetch('http://localhost:3000') ; 
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const inputUserName = useRef() ; 
const inputpassword =useRef() ; 
const [_, setCookies] = useCookies("acces_token");
const navigate = useNavigate();
const toComponentB = (response ) => {
  navigate('/componentB', { state:{response}});
};
const { success, error, warning } = message;

const [messageApi, contextHolder] = message.useMessage();



const recieveInformation = (e) => {
e.preventDefault()
const values= {
name     :inputUserName.current.value ,
password :inputpassword.current.value 
}
}


 /* const validateForm = async (e) => {
    e.preventDefault();
    const nameValue = statename;
    const passwordValue = statepassowrd;

    try {
      const etudData = await post("/login", {
        Name: nameValue,
        Motpass: passwordValue
      });

      if (etudData) {
        // Handle successful login
        console.log("Login successful:", etudData);
      } else {
        // Handle failed login
        setError("Invalid username or password."); // Set error state
      }
    } catch (error) {
      // Handle network or server errors
      console.error("Error during login:", error);
      setError("An error occurred during login."); // Set error state
    }
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3000/etudiant/younes", {
        Name: username,
        Motpass: password,
      }, {
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        setCookies("access_token",response.data.token)
        window.localStorage.setItem('userid', response.data.userId);
        window.localStorage.setItem('Name', response.data.user[0].Name);
        window.localStorage.setItem('Idcart', response.data.user[0].Idcart);
        window.localStorage.setItem('Filliere', response.data.user[0].Filliere);
        window.localStorage.setItem('role', response.data.user[0].role);
        success("Login successful")

        if(response.data.user[0].role==="admin"){
          navigate("/Admin/HomePage"); 
        }
        else {
          navigate("/");
        }
         // Redirect to "/componentb" on successful login

      
    }else {
      warning("Username OR Password is Invalid")
        console.error("Login failed:", response.statusText);
        
      }
    } catch (error) {
      warning("Username OR Password Is Invalid")
      console.error("Error during login:", error);
      // Handle network or server errors (e.g., display error message)
    }
  };

  
  return (
    
    <>

 
      
      <div className="">
          <div className="flex justify-center items-center h-screen ">
            <div className="w-3/4 h-screen hidden lg:block ">
              <img
                src={Pixelimage}
                alt="Placeholder Image"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2  ">
              <h1 className="text-2xl font-semibold mb-4 text-center  text-black">
                You're Back! Let's Get Started!{" "}
              </h1>
              <form onSubmit={handleSubmit}  method="POST">
                <div className="mb-4">
                {contextHolder}
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
                    autoComplete="off"
                    placeholder="Enter your username"
                    ref={inputUserName}  onChange={(e)=>{setUsername(e.target.value)}}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
                    autoComplete="off"
                    placeholder="Password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                </div>

                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="text-red-500"
                  />
                  <label htmlFor="remember" className="text-gray-600 ml-2">
                    Remember Me
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-600 text-white font-semibold rounded-md py-2 px-4 w-full "
                >
                  Login
                </button>
                <div className="flex mt-1 px-2 ">
                  <hr className="bg-red-700 mt-3 w-1/2 pr-1" />
                  <span className="px-2">or</span>
                  <hr className="bg-red-700 mt-3 w-1/2 pr-1" />
                </div>
              </form>
              <div className="liens flex justify-center mt-5">
                <FaFacebook className="mx-1 text-[#B80000] text-[35px] hover:text-[32px] transform  hover:text-black  hover:-translate-y-1   ease-in-out duration-300" />
                <FaTwitter className="mx-1 text-[#B80000] text-[35px] hover:text-[32px]  hover:text-black  hover:-translate-y-1   ease-in-out duration-300" />
                <MdEmail className="text-[#B80000] text-[35px] mx-1 hover:text-[32px]  hover:text-black  hover:-translate-y-1   ease-in-out duration-300" />
                <FaInstagram className="text-[#B80000] text-[35px] mx-1 hover:text-[32px]  hover:text-black  hover:-translate-y-1   ease-in-out duration-300" />
              </div>
            </div>
          </div>
        </div>
      
      
      
      
    
    </>
  );
}

/*export default Login;


function Login() {
  return (
    <>
    <NavBare />
    
      <div className="login h-4/5 grid grid-cols-11 gap-10 mt-2  md:grid-cols-1 md:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-2   ">
        <div className="rounded-md  shadow-xl ring-gray-300  p-6 border-t-0 border-l-2 border-r-2 border-b-2 ml-11 col-span-5 m-auto m-y-0 inline-block md:row-start-2  md:w-3/4 md:m-auto max-sm:w-3/4 max-sm:m-auto max-sm:row-start-2  ">
          <p className="mt-1 text-2xl text-left translate-y-12 font-semibold md:w-[600px] md:m-auto  max-sm:text-1xl ">
            Explorez notre vaste collection de livres et empruntez-les en ligne en quelques clics. Du savoir classique aux dernières recherches, trouvez tout ce dont vous avez besoin pour exceller dans vos études. Rejoignez-nous pour enrichir votre esprit et élargir vos horizons.
          </p>
          <img src={LoginImg} className="size-[339px] translate-y-[10px] -translate-x-24 md:size-[500px] md:m-auto md:translate-y-[px]  max-sm:m-auto  " alt="Logo-image " />
        </div>
        <div className="entre rounded-md md:mt-10 shadow-xl ring-gray-300 col-span-5 p-6 border-t-0 border-l-2 border-r-2 border-b-2 md:w-3/4 md:m-auto  ">
          <div className="translate-y-11">
            <p className="text-4xl font-semibold w-4/5 text-center mb-8 m-auto max-sm:text-2xl">Bienvenue à La Bibliothèque <span className="text-[#B80000] justify-center">De La Faculté Des Sciences</span></p>
            <form action="" className="grid grid-rows-4">
              <input type="email" placeholder="User name:" className="max-[390px]:w-64 w-96 h-12  m-auto  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl" />
              <input type="password" id="password" name="password" placeholder="Password:" className="[390px]:w-[300px] w-96 h-12 m-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl" />
              <button type="submit" className="text-white h-12 my-4 w-32 m-auto h bg-[#B80000] rounded-md  hover:bg-white hover:text-black mb-4 hover:border-red-500 hover:border-solid hover:rounded-lg ease-linear hover:ring-1  hover:text-[20px] duration-300   ">Login</button>
              <div className="liens flex justify-center">
          
<div className="liens flex justify-center">
  <FaFacebook className="mx-1 text-[#B80000] text-[40px] hover:text-[45px] transform  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
  <FaTwitter className="mx-1 text-[#B80000] text-[40px] hover:text-[45px]  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
  <MdEmail className="text-[#B80000] text-[40px] mx-1 hover:text-[45px]  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
  <FaInstagram className="text-[#B80000] text-[40px] mx-1 hover:text-[px]  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
</div>


          </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}*/

export default Login;