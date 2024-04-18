import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import Lottie from "lottie-react";
import AddStudentLogo from "../assets/images/AddStudent.json";

function AddStudent() {
  const [file, setFile] = useState(null);
  const [namebk, setNamebk] = useState('');
  const [copy, setCopy] = useState('');
  const [author, setAuthor] = useState('');
  const [edition, setEdition] = useState('');
  const [errMsg, setErrMsg] = useState({
    firstnameErr: '',
    lastnameErr: '',
    phoneNumberErr: '',
    StudentidErr: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields here if needed
    // Example:
    if (!namebk || !copy || !author || !edition) {
      setErrMsg({
        firstnameErr: 'Please fill in all fields'
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append("NameBook", namebk);
    formData.append("Copy", copy);
    formData.append("Author", author);
    formData.append("Edition", edition);

    try {
      const response = await axios.post('http://localhost:3000/Book/uploadd', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('File uploaded successfully');
      // Clear form fields after successful upload
      setFile(null);
      setNamebk('');
      setCopy('');
      setAuthor('');
      setEdition('');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center mt-10 ml-5 px-5">
          <h1 className="text-2xl text-black tracking-wide ml-10">
            Add Book
          </h1>
          <Lottie animationData={AddStudentLogo} className="w-16 ml-2" />
        </div>
        <div className="flex justify-center items-center ml-10 ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center mr-12 mt-5">
              <h2 className="text-black text-xl pb-3">Information Book</h2>
              <div className="flex  gap-2">
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="input-field border  focus:outline-none py-2 px-4 rounded-md border-green-500 placeholder-gray-400"
                    name="firstname"
                    placeholder="Book Name"
                    value={namebk}
                    onChange={(e) => setNamebk(e.target.value)}
                  />
                  <p className="text-semibold text-red-700  text-sm ml-1">
                    {errMsg.firstnameErr}
                  </p>
                </div>
                <div className="flex  flex-col">
                  <input
                    type="text"
                    className="input-field border border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                    name="lastname"
                    placeholder="Auteur"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  <p className="text-semibold text-red-700  text-sm ml-1">
                    {errMsg.lastnameErr}
                  </p>
                </div>
              </div>
              <h2 className=" text-xl py-3"></h2>
              <div className="flex flex-col  w-full  ">
                <input
                  placeholder="Number of Copy"
                  value={copy}
                  onChange={(e) => setCopy(e.target.value)}
                  className="input-field border   border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                />
                <p className="text-semibold text-red-700  text-sm ml-1">
                  {errMsg.phoneNumberErr}
                </p>
              </div>
              <h2 className="text-xl py-3"></h2>
              <div className="border-green-500  flex flex-col w-full">
                <select
                  name="Feild"
                  className="border py-2 border-md  border-green-500   focus:outline-none rounded-md"
                >
                  <option value="Computer Sience">Computer Science</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                </select>
              </div>
              <div>
                <h2 className="text-xl py-3 text-center">
                 
                </h2>
                <div className="flex flex-col  gap-2 ">
                  <div className="flex flex-col ">
                    <input
                      type="text"
                      className="input-field border border-green-500 py-2 px-4  w-[440px] rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                      placeholder="Edition"
                      value={edition}
                      onChange={(e) => setEdition(e.target.value)}
                    />
                    <p className="text-semibold text-red-700  text-sm ml-1">
                      {errMsg.StudentidErr}
                    </p>
                  </div>
                  <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files[0])}
                    className="input-field border  w-[440px]  border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
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
