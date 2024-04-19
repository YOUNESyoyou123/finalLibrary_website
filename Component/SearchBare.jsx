import React, { useEffect, useState } from "react";

function Search() {
  //state to store the data of the search feild
  const [searchValue, setSearchValue] = useState("");
  //state take the books that are found
  const [Errmsg, setErrmsg] = useState({msg:"",display:false});
  //state to save the book the we are searching for
  const [bookFound,setbookFound]=useState("")

  //creat a function to send  Data to the backend (the data is the search feild)
  const sendDataSearch = async () => {
    await fetch("http://localhost:3000/api/search", {
      //type of the http method is  post  because we are sending data (creating?)
      method: "POST",
      //the type of the data that we have send is
      headers: {
        "Content-Type": "application/json",
      },
      // Send searchValue in the request body
      body: JSON.stringify({ searchValue }),
    })
      .then((response) => {
        if (response.ok) {
          // Return the JSON data if response is OK
          return response.json();
        } else {
          // Throw an error if response is not OK to the backend
          throw new Error("Book not found");
        }
      })
      .then((bookFounde) => setbookFound(bookFounde))
      // .catch((error) => console.error(error));
   
  };
  // Function to handle input change and update searchValue state
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    sendDataSearch(); //i set here the sendDataSearch to  display a small segestion of the books in the home page maximum 5 books
  };

  // Function to send search request to backend
  // Function to handle search button click
  const handleClick = (e) => {
    e.preventDefault();
    if (searchValue.length == 0) {
      setErrmsg({msg:"Please enter a book name to search",display:true});
    } else if (searchValue.length > 100) {
      setErrmsg({msg:"The book name must be under 100 characters",display:true});
    } 
    else{
      setErrmsg({msg:"",display:false})
    }
   
    sendDataSearch();
    console.log(bookFound)
  };
  
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
            {Errmsg.display  && <p>{Errmsg.msg}</p>}
            </div>
    </div>
  );
}

export default Search;