import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBare from "../Component/NavBare";
import Slide from "../Component/Slide";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ComponentB() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false); // State variable for visibility
 

  useEffect(() => {
    // Effect to run on component mount
    setIsVisible(true); // Set isVisible to true when component mounts
sessionStorage.setItem("BookInfo", "BookInfo"); // Store "BookInfo" in sessionStorage
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // You'll need to define BookInfo or retrieve it from somewhere, assuming it's an array
//  const { id, bookName, bookImg, count, id_subbook, Categorie, description } = BookInfo;

  // Define spring animation properties

  var currentDate = new Date();
  var debutdate = new Date().toLocaleDateString();;
var daysToAdd = 15;
var newDate = new Date(currentDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
var dateString = newDate.toLocaleDateString();
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(1000px)",
    config: { delay: 10000 },
  });

//  Idcart Name  Filliere
const Idcart = localStorage.getItem('Idcart').toString();
const Name = localStorage.getItem('Name').toString();
const Filliere = localStorage.getItem('Filliere').toString();

const finalresult =  () =>{
clickemprunt();
handleUpdateCopies();
}

  const clickemprunt = async () => {
    
    try {
      const response = await axios.post("http://localhost:3000/borrowbook/postborrow", {
        Name:Name ,
        Idcart: Idcart,
        Filliere: Filliere ,
      
        Namebook: location.state.image.Namebook,
        Datedebut: debutdate,
        Datefin: dateString,
        
        Author: location.state.image.Author,
        Edition:location.state.image.Edition
      }, {
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.status === 201) { // Change the status check to 201
        console.log("Borrow successful:", response.data);
        window.alert("Borrow successful");
      } else {
        console.error("Borrow failed:", response.statusText);
        // Handle borrow failure (e.g., display error message)
      }
    } catch (error) {
      console.error("Error during borrowing:", error);
      // Handle network or server errors (e.g., display error message)
    }
};



const handleUpdateCopies = async () => {
  try {
    const response = await axios.put(`http://localhost:3000/Book/books/${location.state.image._id}`, {
      Copy: location.state.image.Copy - 1 
    });
    console.log(response.data); 
    setCopies(copies - 1); 
  } catch (error) {
    console.error('Error updating copies:', error);
  }
};





  return (
    <>
    
      <div>
        <NavBare />
        <div className="pt-2">
          <div className="flex justify-center items-center mt-2 px-2 text-center">
            <h1 className="text-2xl font-semibold text-red-700 text-start pl-5 px-2">
              {location.state.image.Namebook}
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
            <div className="flex justify-center py-5">
              <img src={`http://localhost:3000/${location.state.image.image}`} alt="" className="w-48" />
            </div>
            {/* books info section  */}
            <animated.div style={springProps}>
              <div className="text-start py-5 mt-1 rounded-xl sm:rounded-none px-6 w-full sm:py-3 sm:px-10 sm:pr-64 shadow-slate-150 bg-opacity-95">
                <div className="mb-7">
                  <p className="pb-2 font-bold text-xl text-red-700 text-start sm:text-center">
                    Book Information
                  </p>

                  <p className="font-bold py-1 text-xl">Name of the book:</p>
                  <span className="font-normal py-1 text-xl">{location.state.image.Namebook}</span>
                  <p className="font-bold  text-xl py-1">
                    Copies available: <span className="font-normal">{location.state.image.Copy}</span>
                  </p>

                  <p className="font-bold text-xl py-1">
                    Author: <span className="font-normal text-xl py-1">{location.state.image.Author}</span>
                  </p>

                  <p className="font-bold text-xl py-1 ">
                    Edition: <span className="font-normal text-xl py-1">{location.state.image.Edition}</span>
                  </p>
                  <div className="pt-4" ><button   onClick={finalresult} className=" text-white font-serif bg-[#b80000d7] w-[140px]  font-semibold h-12 rounded-3xl hover:bg-white hover:text-black hover:ring-2  ease-in-out delay-150    mr-4 hover:ring-[#b80000d7]  duration-300">Emprunt</button> <button className=" text-white font-serif bg-[#b80000d7] w-[140px] hover:ring-[#b80000d7]  font-semibold h-12 rounded-3xl hover:bg-white hover:text-black hover:ring-2  ease-in-out delay-150      duration-300 " >Demender</button> </div>
                </div>
              </div>
              </animated.div>
              </div>
          </div>
        </div>
        <div className="w-sm:w-auto mb-10 mt-10 sm:mt-0">
          <h1 className="text-2xl text-center text-red-700 font-semibold">Trends Books</h1>
          <Slide />
        </div>
      
    </>
  );
}

export default ComponentB;
