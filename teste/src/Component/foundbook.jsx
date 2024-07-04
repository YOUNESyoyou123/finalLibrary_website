import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import NavBare from "../Component/NavBare";
import Slide from "../Component/Slide";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import { useCookies } from "react-cookie";

import { Button, message } from 'antd';
import { Cookies } from "react-cookie";
import NavBareAdmin from "../AdminComponent/NavBareAdmin";

function Foundbook() {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const bookFound = location.state?.bookFound;

  const [isVisible, setIsVisible] = useState(false);
  const [copies, setCopies] = useState(bookFound?.Copy || 0);
  const [book, setBook] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [cookies , setCookies ]=useCookies('access_token')
  const isLoggedIn = cookies.access_token

  useEffect(() => {
    setIsVisible(true);
    handleData();
  }, [copies]);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(1000px)",
    config: { delay: 10000 },
  });

  const success = (content) => {
    messageApi.open({
      type: 'success',
      content,
      duration: 4,
    });
  };

  const error = (content) => {
    messageApi.open({
      type: 'error',
      content,
    });
  };

  const finalresult = async () => {
    try {
      const alreadyBorrowed = book.some(borrowedBook => borrowedBook.Namebook === bookFound.Namebook);
      if (alreadyBorrowed) {
        error("You cannot borrow this book because it's already borrowed. Please check your cart.");
        return;
      }

      await clickemprunt();
      await handleUpdateCopies();
      setCopies(prevCopies => prevCopies - 1);
      success('A book has been successfully added to your list');
    } catch (error) {
      console.error("Error during borrowing:", error);
    }
  };

  const clickemprunt = async () => {
    try {
      const response = await axios.post("https://finallibrary-website.onrender.com/borrowbook/postborrow", {
        Name: localStorage.getItem('Name').toString(),
        Id: bookFound._id,
        Idcart: localStorage.getItem('Idcart').toString(),
        Filliere: localStorage.getItem('Filliere').toString(),
        Namebook: bookFound.Namebook,
        Datedebut: new Date().toLocaleDateString(),
        Datefin: new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        Author: bookFound.Author,
        Edition: bookFound.Edition,
        Status: "Borrow"
      }, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status !== 201) {
        console.error("Borrow failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during borrowing:", error);
    }
  };

  const handleUpdateCopies = async () => {
    try {
      const response = await axios.put(`https://finallibrary-website.onrender.com/Book/books/${bookFound._id}`, {
        Copy: copies - 1
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error updating copies:', error);
    }
  };

  const handleData = async () => {
    try {
      const response = await axios.get(`https://finallibrary-website.onrender.com/borrowbook/getborrowedbyname/${localStorage.getItem("Name")}`);
      console.log("Data retrieved successfully:", response.data);
      setBook(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="h-screen w-screen overflow-x-hidden overflow-y-hidden">
          <NavBare />
          <div className="pt-2">
            <div className="flex justify-center items-center mt-2 px-2 text-center">
              <h1 className="text-2xl font-semibold text-red-700 text-start pl-5 px-2">
                {bookFound?.Namebook || "Book Not Found"}
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
              <div className="flex justify-center py-5">
                <img src={`https://finallibrary-website.onrender.com/${bookFound?.image}`} alt="" className="w-48" />
              </div>
              <animated.div style={springProps}>
                <div className="text-start py-5 mt-1 rounded-xl sm:rounded-none px-6 w-full sm:py-3 sm:px-10 sm:pr-64 shadow-slate-150 bg-opacity-95">
                  <div className="mb-7">
                    <p className="pb-2 font-bold text-xl text-red-700 text-start sm:text-center">
                      Book Information
                    </p>
                    <p className="font-bold py-1 text-xl">Name of the book:</p>
                    <span className="font-normal py-1 text-xl">{bookFound?.Namebook}</span>
                    <p className="font-bold text-xl py-1">
                      Copies available: <span className="font-normal">{copies}</span>
                    </p>
                    <p className="font-bold text-xl py-1">
                      Author: <span className="font-normal text-xl py-1">{bookFound?.Author}</span>
                    </p>
                    <p className="font-bold text-xl py-1">
                      Edition: <span className="font-normal text-xl py-1">{bookFound?.Edition}</span>
                    </p>
                    <div className="pt-4">
                      {contextHolder}
                      {copies > 0 ? (
                        <Button
                          onClick={finalresult}
                          className="text-white font-serif bg-[#b80000d7] w-[140px] font-semibold h-12 rounded-3xl hover:bg-white hover:text-black hover:ring-2 ease-in-out delay-150 mr-4 hover:ring-[#b80000d7] duration-300"
                        >
                          Emprunt
                        </Button>
                      ) : (
                        <Button
                          onClick={finalresult}
                          className="text-white font-serif bg-[#b80000d7] w-[140px] hover:ring-[#b80000d7] font-semibold h-12 rounded-3xl hover:bg-white hover:text-black hover:ring-2 ease-in-out delay-150 duration-300"
                        >
                          Demander
                        </Button>
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
      ) : (
        navigate("/Login") // Use navigate function to redirect to login page
      )}
    </>
  );
}

export default Foundbook;
