import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBare from './NavBare';
import Home from './Home';
import Login from "../componentslogin/login"
import TrendBooks from './TrendsBooks';
import Categorie from '../componentcatge/categorie';
import ComponentB from '../BookInfo/bookinfo';
import LibraryData from '../AdminComponent/LibraryData'
import AddStudent from '../AdminComponent/AddStudent'
import ManageStudent from '../AdminComponent/ManageStudent'
import HomePage from '../AdminComponent/HomePage'
import ManageBooks from '../AdminComponent/ManageBooks'
import PrivateRoute from '../privateroute/privateroute';
import Cart from './Cart';
import ReturnTransiction from '../AdminComponent/returnTransaction';
ReturnTransiction
function App() {
  return (
    <BrowserRouter>
      <div>
     
      
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booksName" element={<TrendBooks />} />
          <Route path="/Carte" element={<Cart />} />
          <Route path='/componentb' element={<ComponentB></ComponentB>} ></Route>
          <Route path="/Admin/HomePage" element={<PrivateRoute Component={HomePage} />} /> {/* Single entry point for Admin routes */}
          <Route path="/Admin/LibraryData" element={<PrivateRoute Component={LibraryData} />} />
          <Route path="/Admin/ManageStudent" element={<PrivateRoute Component={ManageStudent} />} />
          <Route path="/Admin/ManageBooks" element={<PrivateRoute Component={ManageBooks} />} />
          <Route path="/Admin/ReturnTransiction" element={<PrivateRoute Component={ReturnTransiction} />} />


          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
/*

*/