import React, { useState } from "react";
import axios from "axios";
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import Lottie from "lottie-react";
import AddStudentLogo from "../assets/images/AddStudent.json";

function AddStudent() {
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    Field: "Computer Science",
    Studentid: "",
  });
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
    formData.append("Categorie", formValue.Field );

    try {
      const response = await axios.post('http://localhost:3000/Book/uploadd', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      message.success('Upload successful.');
      // Clear form fields after successful upload
      setFile(null);
      setNamebk('');
      setCopy('');
      setAuthor('');
      setEdition('');
    } catch (error) {
      message.error('Upload failed.');
    }
  };

  const uploadProps = {
    fileList: file ? [file] : [],
    beforeUpload: (file) => {
      setFile(file);
      return false; // Prevent upload
    },
    onRemove: () => {
      setFile(null);
    }
  };


  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
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
              <div className="flex  gap-2 w-[430px]">
                <div className="flex flex-col ">
                  <input
                    type="text"
                    className="input-field border w-[210px]  focus:outline-none py-2 px-4 rounded-md border-green-500 placeholder-gray-400"
                    name="firstname"
                    placeholder="Book Name"
                    value={namebk}
                    onChange={(e) => setNamebk(e.target.value)}
                  />
                  <p className="text-semibold text-red-700  text-sm ml-1">
                    {errMsg.firstnameErr}
                  </p>
                </div>
                <div className="flex  flex-col ">
                  <input
                    type="text"
                    className="input-field border w-[210px] border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                    name="lastname"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  <p className="text-semibold text-red-700  text-sm ml-1">
                    {errMsg.lastnameErr}
                  </p>
                </div>
              </div>
              <h2 className=" text-xl py-3"></h2>
              <div className="flex flex-col  w-[430px]  ">
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
              <div className="border-green-500  w-[430px] flex flex-col ">
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
                <h2 className="text-xl py-3 text-center"></h2>
                <div className="flex flex-col  gap-2 ">
                  <div className="flex flex-col ">
                    <input
                      type="text"
                      className="input-field border  border-green-500 py-2 px-4  w-[430px] rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                      placeholder="Edition"
                      value={edition}
                      onChange={(e) => setEdition(e.target.value)}
                    />
                    <p className="text-semibold text-red-700  text-sm ml-1">
                      {errMsg.StudentidErr}
                    </p>
                  </div>
                  <div className="flex justify-center mt-10">
                  <Upload {...uploadProps}>
                    <Button icon={<UploadOutlined />} className=" justify-self-center w-48	">Select File</Button>
                  </Upload>
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <Button type="primary" htmlType="submit" style={{  }}  className=" h-10 px-7 rounded-md bg-green-500 text-white j" >Submit</Button>
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
