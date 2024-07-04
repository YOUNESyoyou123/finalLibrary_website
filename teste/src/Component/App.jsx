import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBare from "./NavBare";
import Home from "./Home";
import Login from "../componentslogin/login";
import TrendBooks from "./TrendsBooks";
import Categorie from "../componentcatge/categorie";
import ComponentB from "../BookInfo/bookinfo";
import LibraryData from "../AdminComponent/LibraryData";
import AddStudent from "../AdminComponent/AddStudent";
import ManageStudent from "../AdminComponent/ManageStudent";
import HomePage from "../AdminComponent/HomePage";
import ManageBooks from "../AdminComponent/ManageBooks";
import PrivateRoute from "../privateroute/privateroute";
import Cart from "./Cart";
import ReturnTransiction from "../AdminComponent/returnTransaction";
import PersonalProfile from "../Component/profile";
import Categorie2 from "../Categorie2/categorie2";
import Bookcategorie2 from "../bookcategorie2/bookcategorie2";
import ContactUs from "./ContactUs";
import Foundbook from "./foundbook";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categorie2" element={<Categorie2 />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Foundbook" element={<Foundbook />} />
          <Route path="/booksName" element={<TrendBooks />} />
          <Route path="/PersonalProfile" element={<PersonalProfile />} />
          <Route path="/Bookcategorie2" element={<Bookcategorie2 />} />
          <Route path="/Carte" element={<Cart />} />
          <Route path="/componentb" element={<ComponentB></ComponentB>}></Route>
          <Route
            path="/Admin/HomePage"
            element={<PrivateRoute Component={HomePage} />}
          />{" "}
          {/* Single entry point for Admin routes */}
          <Route
            path="/Admin/LibraryData"
            element={<PrivateRoute Component={LibraryData} />}
          />
          <Route
            path="/Admin/ManageStudent"
            element={<PrivateRoute Component={ManageStudent} />}
          />
          <Route
            path="/Admin/ManageBooks"
            element={<PrivateRoute Component={ManageBooks} />}
          />
          <Route
            path="/Admin/ReturnTransiction"
            element={<PrivateRoute Component={ReturnTransiction} />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
/*

*/
