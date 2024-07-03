import React, { useState, useEffect } from "react";
import NavBare from "./NavBare";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import NavBareAdmin from "../AdminComponent/NavBareAdmin";

function Cart() {
  const [book, setBook] = useState([]);
  const [cookies] = useCookies(['access_token']); // Define cookies

  const navigate = useNavigate(); // Define navigate

  const handleData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/borrowbook/getborrowedbyname/${window.localStorage.getItem("Name")}`);
      console.log("Data retrieved successfully:", response.data);
      setBook(response.data); 
    } catch (error) {
      console.log("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const [filter, setFilter] = useState("All");

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredOrders = book.filter(
    (order) => filter === "All" || order.Status === filter
  );

  useEffect(() => {
    if (!cookies.access_token) {
      navigate('/Login');
    }
  }, [cookies.access_token, navigate]);

  return (
    <>
      <div className='flex overflow-hidden  h-screen'>{localStorage.getItem("role") === "admin" && <NavBareAdmin />}
      

      <div className=" round w-screen  overflow-y-auto   ">
        <NavBare/>
        <div className="flex sm:px-10 flex-col gap-3 mt-10    ">
          <h1 className="text-3xl font-semibold px-4 py-2">My Orders</h1>
          <div className="flex gap-2 px-2 ">
            <button
              className={`px-8 py-1 rounded-xl hover:bg-red-700 shadow-md hover:text-white border  ${
                filter === "All" ? "bg-red-700 text-white" : "border-gray-50"
              }`}
              onClick={() => handleFilterChange("All")}
            >
              All
            </button>
            <button
              className={`px-8 py-1 rounded-xl hover:bg-red-700 shadow-md hover:text-white border ${
                filter === "Delivered"
                  ? "bg-red-700 text-white"
                  : "border-gray-50"
              }`}
              onClick={() => handleFilterChange("Delivered")}
            >
              Delivered
            </button>
            <button
              className={`px-8 py-1 rounded-xl hover:bg-red-700 shadow-md hover:text-white border ${
                filter === "Pending"
                  ? "bg-red-700 text-white"
                  : "border-gray-50"
              }`}
              onClick={() => handleFilterChange("Pending")}
            >
              Pending
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 ">
            {filteredOrders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-lg shadow-md p-4 hover:scale-90 transition duration-500"
              >
                <h2 className="text-xl font-semibold mb-2">
                  Order ID: #{order.Idcart}
                </h2>
                <p className="text-sm mb-1">Book: {order.Namebook}</p>
                <p className="text-sm mb-1">Start Date: {order.Datedebut}</p>
                <p className="text-sm mb-1">End Date: {order.Datefin}</p>
                <p className="text-sm mb-1">Status: {order.Status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Cart;
