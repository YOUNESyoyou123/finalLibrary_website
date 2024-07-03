import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [Errmsg, setErrmsg] = useState({ msg: "", display: false });
  const [bookFound, setBookFound] = useState("");
  const navigate = useNavigate();

  const sendDataSearch = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchValue }),
      });
      if (!response.ok) {
        throw new Error("Book not found");
      }
      const data = await response.json();
      setBookFound(data);
    } catch (error) {
      console.error("Error searching for book:", error);
      setBookFound("");
      setErrmsg({ msg: "Book not found", display: true });
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (searchValue.length === 0) {
      setErrmsg({ msg: "Please enter a book name to search", display: true });
      return;
    }
    if (searchValue.length > 100) {
      setErrmsg({
        msg: "The book name must be under 100 characters",
        display: true,
      });
      return;
    }
    setErrmsg({ msg: "", display: false });

    await sendDataSearch();
  };

  useEffect(() => {
    if (bookFound) {
      navigate("/Foundbook", { state: { bookFound } });
    }
  }, [bookFound, navigate]);

  return (
    <div>
      <form>
        <div className="flex items-center justify-center mt-5">
          <button
            className="rounded-l-sm h-10 mt-1 px-5 bg-red-700 text-white shadow-md"
            onClick={handleClick}
          >
            Search
          </button>
          <input
            type="text"
            name="search"
            className="sm:px-32 sm:py-2 sm:rounded-r-sm mt-1 text-center bg-gray-700 border-1 shadow-md focus:border-none focus:outline-none text-white  py-[8px]"
            placeholder="Search for a book"
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="flex justify-center ml-8 text-red-700 font-bold mt-2">
        {Errmsg.display && <p>{Errmsg.msg}</p>}
      </div>
    </div>
  );
}

export default Search;