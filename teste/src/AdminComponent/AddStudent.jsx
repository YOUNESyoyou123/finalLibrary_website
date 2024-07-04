import React from "react";
import { ReactDOM } from "react";
import AddStudentLogo from "../assets/images/AddStudent.json";
import Lottie from "lottie-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Addsvg from "../assets/images/Add.svg";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { faker } from '@faker-js/faker';
import axios from "axios";
import { Upload, message, Button } from 'antd';



function AddStudent() {
  
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    Field: "Computer Science",
    Studentid: "",
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
        const response = await axios.post("https://finallibrary-website.onrender.com/etudiant/etudiants", {
          Name: formValue.firstname,
          LastName: formValue.lastname,
          Idcart: formValue.Studentid,
          PhoneNumber: phoneNumber,
          Filliere: formValue.Field, // Make sure to send Filliere
          birthdayDate: laDate.toString(),
          Motpass: formValue.Studentid + laDate
        });
        if (response.status === 200) {
          message.success("Successfully added student!")
          
        }
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center mt-10 ml-5 px-5">
          <h1 className="text-2xl text-black tracking-wide ml-10">
            Add Student
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
                  value={phoneNumber}
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
                name="Field" // Corrected name attribute
                value={formValue.Field} // Corrected value
                onChange={handleChange}
                className="border py-2 border-md border-green-500 focus:outline-none rounded-md"
>             
                <option value="Computer Science" className="border-green-500">
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
                      placeholder="student id"
                      value={formValue.Studentid}
                      onChange={handleChange}
                    />
                    <p className="text-semibold text-red-700  text-sm ml-1">
                      {errMsg.StudentidErr}
                    </p>
                  </div>
                  <input
                    type="text"
                    onChange={(e) => setNewDate(e.target.value)}
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

export default AddStudent;