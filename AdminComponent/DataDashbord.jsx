import React, { useState, useEffect } from "react";
import axios from "axios";

function DataDashbord() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[Books,setBooks] =useState([])

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/borrowbook/getborrowed");
      console.log("Data retrieved successfully:", response.data);
      setBorrowedBooks(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
      setError("Error retrieving data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const deleteBorrowedBook = async (bookId) => {
    try {
      // Send delete request to API endpoint
      await axios.delete(`http://localhost:3000/borrowbook/delete/${bookId}`);

      // Update state to remove the deleted book locally
      setBorrowedBooks(prevBooks => prevBooks.filter(book => book._id !== bookId));

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
          <div className="flex gap-4 px-3 mt-2">
            <p>All</p>
            <p className="text-green-600">Returned</p>
            <p className="text-red-600">Borrowed</p>
          </div>
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
                {filteredBooks.map((data, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="py-2 px-4">{data.Idcart}</td>
                    <td className="py-2 px-4">{data.Name}</td>
                    <td className="py-2 px-4">{data.Namebook}</td>
                    <td className="py-2 px-4 text-[#b80000]">Borrow</td>
                    <td className="py-2 px-4">{data.Datefin}</td>
                    <td className="py-2 px-4">
                    <button className="text-[#b80000]" onClick={() => deleteBorrowedBook(data._id)}>Delete</button>
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
