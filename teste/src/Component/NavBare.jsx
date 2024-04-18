//Import section of the code 
import React from "react";
import UniLogo from "../assets/images/book3 1.png"
import CartLogo from "../assets/images/icon-cart.svg"
import NotifiLogo from "../assets/images/notification.svg"
import { useState } from "react";
import {useCookies} from 'react-cookie'
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Close from "../assets/images/icon-close.svg"
import Menu from "../assets/images/Menu.svg"
import { Link } from "react-router-dom";
import { createContext } from "react";
// Those three import from  the second  part of the  navigation bare 
import CategorieLogo from "../assets/images/Categorie.svg"
import Creators from "../assets/images/Creators.svg"
import Main from  "../assets/images/Main.svg"

export const MenuContext = createContext();

function NavBare()

{     


    const navigate = useNavigate(); // Define navigate function here
    const younes = true  ; 
        //a State to work the Menu bare  in small devices
        const[menu,setmenu]=useState(false)
        const [profileOpen, setProfileOpen] = useState(false);
        function handleProfileClick(){
            setProfileOpen(!profileOpen);
        }
        function handleClick()
        {setmenu(preValue=>!preValue)}
        const [cookies , setCookies ]=useCookies('access_token')



    
const logout = () =>{
setCookies("access_token","") ; 
window.localStorage.removeItem("userid")
window.localStorage.removeItem("Idcart")
window.localStorage.removeItem("username")
window.localStorage.removeItem("Name")
window.localStorage.removeItem("Filliere")
window.localStorage.removeItem('role');

navigate("/");
window.location.reload("false")



}
        
    return(
        <>
   <MenuContext.Provider value={{ menu, setmenu }}>    
   <nav className={`h-[65px] z-50  sticky   top-0 bg-white shadow-md   border-b   `}>
        <div className="px-4   flex justify-between h-full items-center">

        <div className="flex  ">
       <Link to="/" ><div className="flex"><img src={UniLogo} alt="UniLogo"   width={65}   className=" hidden sm:block "/>  </div></Link> 
        <img src={Menu} alt=""  className="size-8 mt-3 ml-6 sm:hidden "  onClick={handleClick} />
        <img src={UniLogo} alt=""  width={80} height={5} className="sm:hidden mt-1 ml-2  " />
        {/* <img src={Menu} alt="Menu-Logo" width={30} height={10} /> mb3d chof la nzidoha wla nn*/}
        </div>
    

        
        <div className="sm:flex      hover:cursor-pointer	 sm:gap-4 font-semibold hidden ">
            <Link to="/"> <p className="hover:animate-pulse font-roboto hover:underline hover:underline-red hover:underline-offset-8 ease-out duration-600 px-1 text-text-lg	 font-medium  hover:text-red-700">Home</p></Link>
            <Link to='/Carte'><p className="hover:animate-pulse font-roboto hover:underline hover:underline-red hover:underline-offset-8 ease-out duration-600 px-1 text-text-lg	 font-medium  hover:text-red-700">Cart</p></Link>
           <Link to='/categorie'>  <p className="hover:animate-pulse font-roboto hover:underline hover:underline-red hover:underline-offset-8 ease-out duration-600 px-1 text-text-lg	 font-medium  hover:text-red-700">My books</p></Link>
            <p className="hover:animate-pulse font-roboto hover:underline hover:underline-red hover:underline-offset-8 ease-out duration-600 px-1 text-text-lg	 font-medium  hover:text-red-700"> Contact Us</p>
        </div>
        {/* {for mobile application} */}
        <div className={`absolute bg-white h-screen left-0 w-1/2 top-0 pt-10 pl-3 z-10 ${menu ? "animate-slideIn" : "hidden"}`}>
    <ul className="pt-3">
        <button><img src={Close} onClick={handleClick} className="animate-slideIn " /></button>
        <li className="hover:font-extrabold hover:text-red-700 hover:animate-pulse  p-2 text-gray-500   ">Home</li>
        <li className="hover:font-extrabold hover:text-red-600 hover:animate-pulse font-bold p-2 text-gray-500 ">Cart</li>
        <li className="hover:font-extrabold hover:text-red-700 hover:animate-pulse font-bold p-2 text-gray-500 ">idon't know why</li>
        <li className="hover:font-extrabold hover:text-red-700 hover:animate-pulse font-bold p-2 text-gray-500 ">Contact Us</li>
    </ul>
</div>


        <div className="  sm:right-0  sm:flex sm:gap-6 flex   right-0 mt-2 gap-3">

         {!cookies.access_token
            ?<Link to='/Login'><button className=" border-none px-5    h-10  rounded-lg border-bg-red hover:ring-red-400 hover:ring-1 ease-out duration-300 hover:bg-white hover:text-black bg-[#B80000]  text-white cursor-pointer tracking-wide">Login</button></Link>
            :<>
            <FaUserCircle className="text-4xl ml-4  " onClick={handleProfileClick} />
            {profileOpen && (
                <div className="absolute  z-10 right-0   mt-12">
                    <ul className="pt-3 z-20 bg-slate-300">
                        <li className="hover:text-red-700 hover:animate-pulse  hover:cursor-pointer p-2">My Account</li>
                        <li className="hover:text-red-700 hover:animate-pulse  hover:cursor-pointer p-2   "><button onClick={logout}  >Logout</button></li>

                    </ul>
                </div>
            )}
        </>

        }
            
        </div>
        
    </div>

        {/* waiting to desccus about it  with the client*/}
  {/* <div className="mt-2 border-t-0 border-b-2  rounded-xl pb-1 shadow-xl">
       <div className="flex   justify-around  ">
        <div>
                <img src={Creators} alt="y-b-logo" width={23} height={10} className="ml-4"/>
                <p className="font-medium hover:animate-pulse font-roboto hover:text-red-700">creators</p>
        </div>
        <div className="ml-1  mt-1 ">
                <img src={Main}alt="Main-logo" width={33}  height={10} className="" />
                <p className="text-center font-medium hover:animate-pulse font-roboto hover:text-red-700">Main</p>
        </div>
        <div>
            <img src={CategorieLogo} alt="cat-logo" className="ml-3" />
            <p className="text-center font-medium hover:animate-pulse font-roboto hover:text-red-700">Categorie</p>

            </div>
       </div>
  </div> */}
    </nav>
    </MenuContext.Provider> 
        </>
    )
}
export default NavBare