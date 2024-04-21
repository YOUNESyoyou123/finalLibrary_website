import React, { useEffect, useRef } from "react";

function BookDetailsModal({ book, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle} ref={modalRef}>
        <button style={closeButtonStyle} onClick={onClose}>Close</button>
        <h2 className=" text-3xl my-6 text-[#b80000] ">Book Details</h2>
        <p className=" my-4 text-xl  ">ID:     <span className="text-[#b80000]">{book._id}</span></p>
        <p className=" my-4 text-xl  ">Name:   <span className="text-[#b80000]">{book.Namebook}</span></p>
        <p className=" my-4 text-xl  ">Author: <span className="text-[#b80000]">{book.Author}</span></p>
        <p className=" my-4 text-xl  ">Copies: <span className="text-[#b80000]">{book.Copy}</span></p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyle = {
  backgroundColor: "#fefefe",
  width:"340px" , 
  height: "340px",
  padding: "20px",
  borderRadius: "8px",
  position: "relative", // Added for positioning the close button
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
  border: "none",
  background: "none",
  fontSize: "16px",
};

export default BookDetailsModal;
