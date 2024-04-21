import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { motion } from "framer-motion";

function TrendBooks(props) {
   // Destructure props
   const { img } = props;
   // Initialize state for books
   const [cookies] = useCookies(['access_token']);
   const navigate = useNavigate();
 
   const toComponentB = () => {
     if (cookies.access_token) {
       navigate('/componentB', { state: { image: props.item } });
     } else {
       navigate('/Login');
     }
   };
 
   return (
     <div>
       <div></div>
       <div className="px-3 mb-1">  
         <a onClick={toComponentB}>
           <img src={img} alt="book-images" className="sm:w-34 sm:h-48 size-30" />
         </a>
       </div>
     </div>
   );
}

export default TrendBooks;
