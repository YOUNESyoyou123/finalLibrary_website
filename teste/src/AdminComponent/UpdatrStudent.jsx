import React, { useEffect, useState } from "react";
import AddStudentLogo from "../assets/images/AddStudent.json";
import Lottie from "lottie-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import { Upload, message, Button } from 'antd';

import axios from "axios";

function Edituser({ user }) {
    const [work , setwork] = useState("")
  const [formValue, setFormValue] = useState({
    firstname: user.Name,
    lastname: user.LastName,
    phone:user.PhoneNumber ,
    birthdayDate : user.birthdayDate , 
    Field: user.Filliere,
    Studentid: user.Idcart,
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [laDate, setNewDate] = useState(null);
  const [errMsg, setErrMsg] = useState({
    firstnameErr: "",
    lastnameErr: "",
    StudentidErr: "",
    phoneNumberErr: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;
    const onlyCharRegex = /^[a-zA-Z]*$/;
    const onlyNumbersRegex = /^[0-9]*$/;

    // Validation for first name
    if (!onlyCharRegex.test(formValue.firstname)) {
      setErrMsg((prevErr) => ({
        ...prevErr,
        firstnameErr: "First name must only contain letters",
      }));
      isValid = false;
    } else if (formValue.firstname.length === 0) {
      setErrMsg((prevErr) => ({
        ...prevErr,
        firstnameErr: "Please enter first name",
      }));
      isValid = false;
    } else if (formValue.firstname.length > 20) {
      setErrMsg((prevErr) => ({
        ...prevErr,
        firstnameErr: "Name must not exceed 20 characters",
      }));
      isValid = false;
    } else {
      setErrMsg((prevErr) => ({
        ...prevErr,
        firstnameErr: "",
      }));
    }

    // Validation for student id
    if (!onlyNumbersRegex.test(formValue.Studentid)) {
      setErrMsg((prevErr) => ({
        ...prevErr,
        StudentidErr: "Student id must only be numbers",
      }));
      isValid = false;
    } else if (formValue.Studentid.length === 0) {
      setErrMsg((prevErr) => ({
        ...prevErr,
        StudentidErr: "Please enter student id",
      }));
      isValid = false;
    } else if (formValue.Studentid.length !== 8) {
      setErrMsg((prevErr) => ({
        ...prevErr,
        StudentidErr: "Student id must be 8 numbers",
      }));
      isValid = false;
    } else {
      setErrMsg((prevErr) => ({
        ...prevErr,
        StudentidErr: "",
      }));
    }
    
    if (isValid) {
    try {
      const response = await axios.put(`https://finallibrary-website.onrender.com/etudiant/etudiants/${user._id}`, {
        Name: formValue.firstname,
        LastName: formValue.lastname,
        Idcart: formValue.Studentid,
        PhoneNumber: formValue.phone,
        Filliere: formValue.Field, 
        birthdayDate: formValue.birthdayDate,
        Motpass: formValue.Studentid + formValue.birthdayDate
      });
      if (response.status === 200 || response.status === 204) {
        console.log("workfine")
        setwork("workfine") ; 
        message.success("Successfully Update information  student!")
    }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  }
};
useEffect(()=>{
    
},[work])

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center mt-10 ml-5 px-5">
          <h1 className="text-2xl text-black tracking-wide ml-10">
            Edit Information
          </h1>
          <Lottie animationData={AddStudentLogo} className="w-16 ml-2" />
        </div>
        <div className="flex justify-center items-center ml-10 ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center mr-12 mt-5">
              <h2 className="text-black text-xl pb-3">Full Name</h2>
              <div className="flex  gap-2">
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="input-field border  focus:outline-none py-2 px-4 rounded-md border-green-500 placeholder-gray-400"
                    placeholder="First Name"
                    name="firstname"
                    value={formValue.firstname}
                    onChange={handleChange}
                  />
                  <p className="text-semibold text-red-700  text-sm ml-1">
                    {errMsg.firstnameErr}
                  </p>
                </div>
                <div className="flex  flex-col">
                  <input
                    type="text"
                    className="input-field border border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                    placeholder="Last Name"
                    name="lastname"
                    value={formValue.lastname}
                    onChange={handleChange}
                  />
                  <p className="text-semibold text-red-700  text-sm ml-1">
                    {errMsg.lastnameErr}
                  </p>
                </div>
              </div>
              <h2 className=" text-xl py-3">Phone Number </h2>
              <div className="flex flex-col  w-full  ">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={formValue.phone}
                  onChange={handlePhoneNumber}
                  country="DZ"
                  className="input-field border   border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                />
                <p className="text-semibold text-red-700  text-sm ml-1">
                  {errMsg.phoneNumberErr}
                </p>
              </div>
              <h2 className="text-xl py-3">Field of Study</h2>
              <div className="border-green-500  flex flex-col w-full">
                <select
                  name="Field"
                  value={formValue.Field}
                  onChange={handleChange}
                  className="border py-2     border-md  border-green-500   focus:outline-none rounded-md"
                >
                  <option value="Computer Science" className="border-green-500 ">
                    {" "}
                    Computer Science
                  </option>
                  <option value="Mathematics"> Mathematics</option>
                  <option value="Physics"> Physics</option>
                  <option value="Chemistry"> Chemistry</option>
                </select>
              </div>
              <div>
                <h2 className="text-xl py-3 text-center">
                  Birthday date and student_id
                </h2>
                <div className="flex gap-2 ">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="Studentid"
                      className="input-field border border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                      placeholder="Student ID"
                      value={formValue.Studentid}
                      onChange={handleChange}
                    />
                    <p className="text-semibold text-red-700  text-sm ml-1">
                      {errMsg.StudentidErr}
                    </p>
                  </div>
                  <input
                    value={formValue.birthdayDate}
                    onChange={(date) => setNewDate(date)}
                    placeholder="Current year of study"

                    name="Date"
                    className="input-field border border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                  />
                </div>
                <div className="flex justify-center mt-10  ">
                  <button
                    className="py-2 px-7 rounded-md bg-green-500 text-white"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edituser;
