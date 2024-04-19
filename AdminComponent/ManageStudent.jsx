import React from "react";
import NavBareAdmin from "./NavBareAdmin";
import Actions from "../assets/images/Settings.svg";
import { DumyData } from "./DumyDatatTest/DatatTest";
import AddStudent from "./AddStudent";
import { useState , useEffect } from "react";
import Close from "../assets/images/icon-close.svg";
import { MotionConfig } from "framer-motion";
import DeleteLogo from "../assets/images/DeleteLogo.svg";
import EditLogo from "../assets/images/Editlogo.svg";
import SeeLogo from "../assets/images/Seelogo.svg";
import axios from "axios";

function ManageStudent() {

  const [showAddUser, setAdduser] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function handleAddStudnet(e) {
    e.preventDefault();
    setAdduser((preValue) => !preValue);
  }
  function handleEdit(e) {
    e.preventDefault();
    setShowMenu((preValue) => !preValue);
  }



  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/etudiant/etudiants");
      console.log("Data retrieved successfully:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  function handleAddStudnet(e) {
    e.preventDefault();
    setAdduser((preValue) => !preValue);
  }
  function handleEdit(e) {
    e.preventDefault();
    setShowMenu((preValue) => !preValue);
  }
  return (
    <div className="flex bg-gray-900 h-screen">
      <NavBareAdmin />

      {showAddUser && (
        <section className="fixed inset-0 flex justify-center  items-center bg-opacity-30    backdrop-blur-sm z-10  ">
          <div className="w-full max-w-lg px-5 ">
            <div className="rounded-md backdrop-blur-sm bg-white p-12">
              <img src={Close} alt="" onClick={handleAddStudnet} />
              <AddStudent />
            </div>
          </div>
        </section>
      )}
      <div className="flex flex-col w-full p-8">
        <div className="mb-8">
          <h1 className="text-center text-3xl text-red-500 mb-2 font-semibold">
            <span className="animate-text-appear inline-block">
              <span className="text-white">Welcome back,</span> { localStorage.getItem('Name').toString()}
            </span>
          </h1>
          <p className="text-center text-white opacity-75 text-sm">
            Manage your students efficiently
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-white font-semibold">Manage Students</h2>
          <form className="ml-60 ">
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
                type="text"
                id="default-search"
                className="block w-full py-3  px-20 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:"
                placeholder="Search"
                required
              />
            </div>
          </form>
          <button
            className="bg-green-700 px-4 py-2 rounded-md text-white hover:bg-green-600 transition-colors duration-300"
            onClick={handleAddStudnet}
          >
            Add New Student
          </button>
        </div>

        <div className="overflow-auto rounded-lg shadow-lg bg-white">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Firs Name</th>
                <th className="px-6 py-3 text-left">Last Name</th>
                <th className="px-6 py-3 text-left">Filiere</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="px-6 py-4">{user.Idcart}</td>
                  <td className="px-6 py-4">{user.Name }  </td>
                  <td className="px-6 py-4">{user.LastName}</td>
                  <td className={user.Status === "Borrowed" ? "px-6 py-4 text-red-600" : "px-6 py-4 text-green-600"}>
                    {user.Filliere}
                  </td>
                  <td className="px-6 py-4 flex items-center">
                    <img src={Actions} alt="ActionsIcon" className="w-6 h-6 mr-2" />
                    <button className=" hover:text-blue-800" onClick={handleAddStudnet} >Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageStudent;
