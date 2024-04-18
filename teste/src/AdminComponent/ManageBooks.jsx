import React, { useState, useEffect } from "react";
import NavBareAdmin from "./NavBareAdmin";
import DeleteLogo from "../assets/images/DeleteLogo.svg";
import EditLogo from "../assets/images/Editlogo.svg";
import SeeLogo from "../assets/images/Seelogo.svg";
import Close from "../assets/images/icon-close.svg";
import Addbook from './Addbook';
import axios from "axios";
import BookDetailsModal from "./BookDetailsModal";

function ManageBooks() {
  const [books, setBooks] = useState([]);
  const [addbook, setAddbook] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Book/booksq");
      console.log("Data book successfully:", response.data);
      setBooks(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleChanege(event) {
    setSearchQuery(event.target.value);
  }

  const handleAddbook = (e) => {
    e.preventDefault();
    setAddbook(prevValue => !prevValue);
  };

  const handleDeleteBook = async (bookId, bookDetails) => {
    try {
      await axios.delete(`http://localhost:3000/Book/books/${bookId}`);
      // Update state to remove the deleted book
      setBooks(books.filter(book => book._id !== bookId));
      console.log("Book deleted successfully");
      
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleSeeBook = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const filteredBooks = books.filter(book =>
    book.Namebook.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex bg-gray-900">
        <NavBareAdmin />
        {addbook && (
          <section className="fixed inset-0 flex justify-center  items-center bg-opacity-30    backdrop-blur-sm z-10  ">
            <div className="w-full max-w-lg px-5 ">
              <div className="rounded-md backdrop-blur-sm bg-white p-12">
                <img src={Close} alt="" onClick={handleAddbook} />
                <Addbook />
              </div>
            </div>
          </section>
        )}
        <div className="w-full">
          <div className="mt-5 text-white  animate-text-appear">
            <h1 className="text-3xl text-center  ">
              Welcom Back <span className="text-red-500"> Mokhttar </span>
            </h1>
            <p className="text-center ">Manage your books</p>
          </div>
          <div className="flex gap-2 items-center  justify-between  px-5 mt-5 text-white py-4  ">
            <h1 className="text-2xl text-white font-semibold  px-2">
              List of books
            </h1>
            <div className="flex gap-5 py-2"></div>
            <div className="flex gap-4 py-2  items-center   ">
              <form className="ml-60 w-full">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full py-3  px-20 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:"
                    placeholder="Search "
                    required
                    onChange={handleChanege}
                  />
                </div>
              </form>
            </div>
            <button className="py-3 border px-10 bg-green-700 border-none hover:bg-green-500 rounded-md" onClick={handleAddbook}>
              Add book
            </button>
          </div>
          <div className="flex justify-center ml-5 overflow-auto bg-white    rounded-l-xl" style={{ maxHeight: "500px" }}>
            <table className="w-full   flex-shrink flex-wrap overflow-y-scroll">
              <thead>
                <tr className="w-screen bg-gray-200">
                  <th className="w-32 py-3 ">ID</th>
                  <th className="w-32 py-3 ">Book name</th>
                  <th className="w-32 py-3 ">Auteur</th>
                  <th className="w-32 py-3 ">Copies</th>
                  <th className="w-32 py-3 ">id_subbook</th>
                  <th className="py-3 w-32">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((book, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="px-6 py-4">{book._id}</td>
                    <td className="px-6 py-4">{book.Namebook}</td>
                    <td className="px-6 py-4">{book.Author}</td>
                    <td className="px-6 py-4">{book.Copy}</td>
                    <td className="px-6 py-4">{book.id_subbook}</td>
                    <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                      <button onClick={() => handleSeeBook(book)}>
                        <img src={SeeLogo} alt="" className="w-8" />
                      </button>
                      <button onClick={() => handleDeleteBook(book._id)}>
                        <img src={DeleteLogo} alt="" className="w-8" />
                      </button>
                      <button>
                        <img src={EditLogo} alt="" className="w-8" />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {selectedBook && (
        <BookDetailsModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default ManageBooks;
