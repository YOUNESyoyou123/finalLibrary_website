import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBare from "../Component/NavBare";
import Slide from "../Component/Slide";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import { Button, message } from 'antd';
import NavBareAdmin from "../AdminComponent/NavBareAdmin";


function ComponentB() {
  const location = useLocation();
  const [count, setCount] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
  const [copies, setCopies] = useState(location.state.image.Copy);
  const [book , setBook ] = useState(""); // Changed from array to string
  const [alreadyBorrowed ,setalreadyBorrowed ] = useState()
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'A book has been successfully added to your list',
      duration: 4,
    }); };

    const error = () => {
      messageApi.open({
        type: 'error',
        content: "You cannot borrow this book because it's already borrowed check you cart please!.",
      });
    };

  useEffect(() => {
    setIsVisible(true);
    handleData();
  }, [copies , count ]);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(1000px)",
    config: { delay: 10000 },
  });

  const finalresult = async () => {
    try {
      let alreadyBorrowed = false;
  
      for (const borrowedBook of book) {
        if (borrowedBook.Namebook === location.state.image.Namebook) {
          alreadyBorrowed = true;
          console.log("Book is already borrowed");
          break;
        }
      }
  
      if (alreadyBorrowed) {
        error()
        return;
      }
      await clickemprunt();
      await handleUpdateCopies();
      setCopies(copies - 1);
      success() ; 


  
      // Rest of the function code
    } catch (error) {
      console.error("Error during borrowing:", error);
    }
  };
  

  const clickemprunt = async () => {
    try {
      const response = await axios.post("http://localhost:3000/borrowbook/postborrow", {
        Name: localStorage.getItem('Name').toString(),
        Id: location.state.image._id,
        Idcart: localStorage.getItem('Idcart').toString(),
        Filliere: localStorage.getItem('Filliere').toString(),
        Namebook: location.state.image.Namebook,
        Datedebut: new Date().toLocaleDateString(),
        Datefin: new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        Author: location.state.image.Author,
        Edition: location.state.image.Edition ,
        Status : "Borrow"
      }, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        console.log("Borrow successful:", response.data);
      } else {
        console.error("Borrow failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during borrowing:", error);
      throw error;
    }
  };



  const demander = async () => {
    try {
      const response = await axios.post("http://localhost:3000/borrowbook/postborrow", {
        Name: localStorage.getItem('Name').toString(),
        Id: location.state.image._id,
        Idcart: localStorage.getItem('Idcart').toString(),
        Filliere: localStorage.getItem('Filliere').toString(),
        Namebook: location.state.image.Namebook,
        Datedebut: "-------------",
        Datefin: "---------------",
        Author: location.state.image.Author,
        Edition: location.state.image.Edition ,
        Status : "Pending"
      }, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        console.log("Pendinig  book  successful:", response.data);
        setCount(count+1)
      } else {
        console.error("Borrow failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during borrowing:", error);
      throw error;
    }
  };


  const finalpendding = async () => {
    try {
      let alreadyBorrowed = false;
  
      for (const borrowedBook of book) {
        if (borrowedBook.Namebook === location.state.image.Namebook) {
          alreadyBorrowed = true;
          console.log("Book is already borrowed or pendding check your cart please!");
          break;
        }
      }
  
      if (alreadyBorrowed) {
        error("Book is already borrowed or pendding check your cart please!")
        return;
      }
      await demander();
      success() ; 


  
      // Rest of the function code
    } catch (error) {
      console.error("Error during borrowing:", error);
    }
  };




  const handleUpdateCopies = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/Book/books/${location.state.image._id}`, {
        Copy: copies - 1 
      });
      console.log(response.data); 
    } catch (error) {
      console.error('Error updating copies:', error);
      throw error;
    }
  };

  const handleData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/borrowbook/getborrowedbyname/${window.localStorage.getItem("Name")}`);
      console.log("Data retrieved successfully:", response.data);
      setBook(response.data); 
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };
  

  return (
    <>
      
      <div className="h-screen w-screen overflow-x-hidden overflow-y-hidden">
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
            <animated.div style={springProps}>
              <div className="text-start py-5 mt-1 rounded-xl sm:rounded-none px-6 w-full sm:py-3 sm:px-10 sm:pr-64 shadow-slate-150 bg-opacity-95">
                <div className="mb-7">
                  <p className="pb-2 font-bold text-xl text-red-700 text-start sm:text-center">
                    Book Information
                  </p>
                  <p className="font-bold py-1 text-xl">Name of the book:</p>
                  <span className="font-normal py-1 text-xl">{location.state.image.Namebook}</span>
                  <p className="font-bold text-xl py-1">
                    Copies available: <span className="font-normal">{copies}</span>
                  </p>
                  <p className="font-bold text-xl py-1">
                    Author: <span className="font-normal text-xl py-1">{location.state.image.Author}</span>
                  </p>
                  <p className="font-bold text-xl py-1">
                    Edition: <span className="font-normal text-xl py-1">{location.state.image.Edition}</span>
                  </p>
                  <div className="pt-4">
                  {contextHolder}
                  {copies > 0 ? (
                  <button
                    onClick={finalresult}
                    className="text-white font-serif bg-[#b80000d7] w-[140px] font-semibold h-12 rounded-3xl hover:bg-white hover:text-black hover:ring-2 ease-in-out delay-150 mr-4 hover:ring-[#b80000d7] duration-300"
                  >
                    Borrow
                    </button>
                    ) : (
                      <button
                        onClick={finalpendding}
                        className="text-white font-serif bg-[#b80000d7] w-[140px] hover:ring-[#b80000d7] font-semibold h-12 rounded-3xl hover:bg-white hover:text-black hover:ring-2 ease-in-out delay-150 duration-300"
                      >
                        Panding 
                      </button>
                    )}
            </div>
                </div>
              </div>
            </animated.div>
          </div>
        </div>
        <div className="w-sm:w-auto mb-10 mt-10 sm:mt-0">
          <h1 className="text-2xl text-center text-red-700 font-semibold">Trends Books</h1>
          <Slide />
        </div>
      </div>
      
    </>
  );
}

export default ComponentB;
