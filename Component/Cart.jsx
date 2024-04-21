import React, { useState } from "react";
import NavBare from "./NavBare";
import { CartData } from "./BooksData(test)/CartData";
import NotificationIcon from "../assets/images/notification.svg"; 

function Cart() {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredOrders = CartData.filter(
    (order) => filter === "All" || order.status === filter
  );

  return (
    <>
      <div className="py-1  ">
        <NavBare />
      </div>
      <div className="sm:px-10 round ">
        <div className="flex flex-col gap-3 mt-10">
          <h1 className="text-3xl font-semibold px-4 py-2"> My Orders</h1>
          <div className="flex gap-2 px-2">
            <button
              className={`px-8 py-1 rounded-xl hover:bg-red-700 shadow-md hover:text-white border ${
                filter === "All" ? "bg-red-700 text-white" : "border-gray-50"
              }`}
              onClick={() => handleFilterChange("All")}
            >
              All
            </button>
            <button
              className={`px-8 py-1 rounded-xl hover:bg-red-700 shadow-md hover:text-white border ${
                filter === "Returned"
                  ? "bg-red-700 text-white"
                  : "border-gray-50"
              }`}
              onClick={() => handleFilterChange("Returned")}
            >
              Returned
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
                key={order.orderId}
                className="bg-white rounded-lg shadow-md p-4 hover:scale-90  transition duration-500"
              >
                <h2 className="text-xl font-semibold mb-2">
                  Order ID: #{order.orderId}
                </h2>
                <p className="text-sm mb-1">Book: {order.bookName}</p>
                <p className="text-sm mb-1">Date: {order.date}</p>
                <p className="text-sm mb-1">Status: {order.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
