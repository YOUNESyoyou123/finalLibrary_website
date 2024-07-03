import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBareAdmin from "./NavBareAdmin";
import Actions from "../assets/images/Settings.svg";
import AddStudent from "./AddStudent";
import Close from "../assets/images/icon-close.svg";
import Edituser from "./UpdatrStudent";

function ManageStudent() {
  const [showAddUser, setAdduser] = useState(false);
  const [editUserModalOpen, setEditUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/etudiant/etudiants");
      console.log("Data retrieved successfully:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    setAdduser((prevValue) => !prevValue);
  };

  const editUser = (user) => {
    setSelectedUser(user);
    setEditUserModalOpen(true);
  };

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.Name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="flex bg-gray-900 h-screen">
      <NavBareAdmin />
      {/* Add Student Modal */}
      {showAddUser && (
        <section className="fixed inset-0 flex justify-center items-center bg-opacity-30 backdrop-blur-sm z-10">
          <div className="w-full max-w-lg px-5">
            <div className="rounded-md backdrop-blur-sm bg-white p-12">
              <img src={Close} alt="" onClick={handleAddStudent} />
              <AddStudent />
            </div>
          </div>
        </section>
      )}

      {/* Edit User Modal */}
      {editUserModalOpen && (
        <section className="fixed inset-0 flex justify-center items-center bg-opacity-30 backdrop-blur-sm z-10">
          <div className="w-full max-w-lg px-5">
            <div className="rounded-md backdrop-blur-sm bg-white p-12">
              <img src={Close} alt="" onClick={() => setEditUserModalOpen(false)} />
              <Edituser user={selectedUser} />
            </div>
          </div>
        </section>
      )}

      <div className="flex flex-col w-full p-8">
        <div className="mb-8">
          <h1 className="text-center text-3xl text-red-500 mb-2 font-semibold">
            <span className="animate-text-appear inline-block">
              <span className="text-white">Welcome back,</span>{" "}
              {localStorage.getItem("Name").toString()}
            </span>
          </h1>
          <p className="text-center text-white opacity-75 text-sm">Manage your students efficiently</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-white font-semibold">Manage Students</h2>
          <form className="ml-60">
            <label htmlFor="default-search" className="sr-only">Search</label>
            <input
              type="text"
              id="default-search"
              className="block w-full py-3  px-20 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:"
              placeholder="Search"
              onChange={handleSearch}
              required
            />
          </form>
          <button
            className="bg-green-700 px-4 py-2 rounded-md text-white hover:bg-green-600 transition-colors duration-300"
            onClick={handleAddStudent}
          >
            Add New Student
          </button>
        </div>

        <div className="overflow-auto rounded-lg shadow-lg bg-white">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">First Name</th>
                <th className="px-6 py-3 text-left">Last Name</th>
                <th className="px-6 py-3 text-left">Field</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="px-6 py-4">{user.Idcart}</td>
                  <td className="px-6 py-4">{user.Name}</td>
                  <td className="px-6 py-4">{user.LastName}</td>
                  <td className="px-6 py-4">{user.Filliere}</td>
                  <td className="px-6 py-4 flex items-center">
                    <img src={Actions} alt="ActionsIcon" className="w-6 h-6 mr-2" />
                    <button className="hover:text-blue-800" onClick={() => editUser(user)}>
                      Edit
                    </button>
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
