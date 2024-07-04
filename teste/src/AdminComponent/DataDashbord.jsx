import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Popconfirm } from 'antd';

function DataDashbord() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://finallibrary-website.onrender.com/borrowbook/getborrowed");
      console.log("Data retrieved successfully:", response.data);
      setBorrowedBooks(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
      setError("Error retrieving data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCopies = async (bookId) => {
    try {
      const response = await axios.put(`https://finallibrary-website.onrender.com/Book/booksborrow/${bookId}`, {
        // Increment the number of copies by 1
        Copy: 1 
      });
      console.log("well done "); 
    } catch (error) {
      console.error('Error updating copies:', error);
      throw error;
    }
  };

  const deleteBorrowedBook = async (bookId, studentId) => {
    try {
      // Send delete request to API endpoint
      await axios.delete(`https://finallibrary-website.onrender.com/borrowbook/delete/${bookId}`);

      // Update state to remove the deleted book locally
      setBorrowedBooks(prevBooks => prevBooks.filter(book => book._id !== bookId));

      // Update copies
      await handleUpdateCopies(studentId);
      
      console.log("Book deleted successfully");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = borrowedBooks.filter(book =>
    book.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="pt-10 px-2 border flex flex-col mt-10 mx-20 pb-10 rounded-xl shadow-md bg-white">
        <h1 className="py-1 text-xl px-1 text-red-700 ml-6 text-center">
          <span className="animate-text-appear inline-block text-center">Recent Transactions</span>
        </h1>
        <div className="flex justify-between">
          <input
            type="text"
            size={20}
            className="shadow-md py-1 rounded-md border-gray-100 border mt-1 px-10 text-start"
            placeholder="Search for a transaction"
            value={searchQuery}
            onChange={handleSearchChange}
          />
    
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="mt-4 overflow-y-scroll" style={{ maxHeight: "390px" }}>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-5">id_Student</th>
                  <th className="py-2 px-5">Name</th>
                  <th className="py-2 px-5">BookName</th>
                  <th className="py-2 px-5">Status</th>
                  <th className="py-2 px-5">Date</th>
                  <th className="py-2 px-5">Delete</th>
                </tr>
              </thead>
              <tbody className="overflow-y-scroll">
                {filteredBooks.map((book, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="py-2 px-4">{book.Idcart}</td>
                    <td className="py-2 px-4">{book.Name}</td>
                    <td className="py-2 px-4">{book.Namebook}</td>
                    <td className="py-2 px-4 text-[#b80000]">Borrow</td>
                    <td className="py-2 px-4">{book.Datefin}</td>
                    <td className="py-2 px-4">
                      <Popconfirm
                        title="Delete Borrow Book"
                        description="Are you sure to delete ?"
                        okText={<p className="text-red-600 bg-white w-[40px] h-[100%] overflow-hidden ">Yes</p> }
                        cancelText="No"
                        onConfirm={() => deleteBorrowedBook(book._id, book.Id )}
                      >
                        <Button danger>Delete</Button>
                      </Popconfirm>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default DataDashbord;
