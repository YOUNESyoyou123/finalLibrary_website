import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBare from './NavBare';
import Home from './Home';
import Login from "../componentslogin/login"
import TrendBooks from './TrendsBooks';
import Categorie from '../componentcatge/categorie';
import ComponentB from '../BookInfo/bookinfo';


function App() {
  return (
    <BrowserRouter>
      <div>
     
      
        <Routes>
         
          <Route path="/" element={<Home />}/>
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booksName" element={<TrendBooks />} />
          <Route path='/componentb' element={<ComponentB></ComponentB>} ></Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
/*

*/