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
        window.alert("login succefully")
        navigate("/"); // Redirect to "/componentb" on successful login

      
      } else {
        console.error("Login failed:", response.statusText);
        // Handle login failure (e.g., display error message)
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle network or server errors (e.g., display error message)
    }
  };
  
  return (
    <>


      <div className="younes flex  min-h-full flex-rows    w-full       rounded-xl border-2  text-gray-900 shadow-sm ring-3 ring-inset ring-gray-300 placeholder:text-gray-400 h-screen">
        <div className="w-[55%]"> <img src={Pixelimage} alt=""  className="w-full  h-full border-2 max-sm:hidden max-md:hidden max-lg:visible" />
        </div>
        <div className="w-40%">
        <div className="w-full h-full my-[125px] ml-10 px-[100px]  ">
                  <div className=" items-center m-auto flex justify-center  mb-2    "   >
                  <h2  className="text-center text-2xl font-bold leading-9 tracking-tight text-[black] ">You're Back! Let's Get Started!</h2>
                  </div>
             <div className=" ">
              <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                <div>
                  
                  <div className="mt-2">
                    <input ref={inputUserName}  onChange={(e)=>{setUsername(e.target.value)
                    console.log(username)}}
                    id="email" name="email"  placeholder="Enter your Username" required className="block w-full max-sm:w-64 rounded-md border-0 py-1.5 pl- text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 h-10 focus:ring-inset focus:ring-[#B80000] sm:text-xm sm:leading-6" />
                </div>
          </div>

            <div>
              <div className="flex items-center justify-between">
                
                <div className="text-sm">
                  <a href="#" className="font-semibold text-[black]   max-sm:mr-5 hover:text-[#b80000]">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input ref={inputpassword}  onChange={(e)=>{setPassword(e.target.value)
                console.log(password)}}
                 id="password" name="password"  placeholder="password" type="password" autoComplete="current-password" required className="block w-full pl-3 h-10 max-sm:w-64  rounded-md border-0 py-1.5 text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#B80000] sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button
               type="submit" className="flex w-full justify-center rounded-md bg-[#B80000] h-10 max-sm:w-64  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-black hover:ring-red hover:ring-2 hover:bg-[white] duration-300 ease-in-out hover:ring- focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>
          <p id="vide" className="hidden">please entre user name And Password </p>
        
      <div className="liens flex justify-center m-10">
        <FaFacebook className="mx-1 text-[#B80000] text-[40px] hover:text-[40px] transform hover:text-black hover:-translate-y-2 ease-in-out duration-300" />
        <FaTwitter className="mx-1 text-[#B80000] text-[40px] hover:text-[40px] hover:text-black hover:-translate-y-2 ease-in-out duration-300" />
        <MdEmail className="text-[#B80000] text-[40px] mx-1 hover:text-[40px] hover:text-black hover:-translate-y-2 ease-in-out duration-300" />
        <FaInstagram className="text-[#B80000] text-[40px] mx-1 hover:text-[40px] hover:text-black hover:-translate-y-2 ease-in-out duration-300" />
      </div>
      </div>
      </div>

        </div>

      </div>
<div>



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