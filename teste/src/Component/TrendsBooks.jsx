import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


function TrendBooks(props) {
   // initilazing  Stet for  books

   


    return (
        <>
            <div>
                <div>
                    
                </div>
                <div className="px-3 mb-1"  >  
                <Link to='/TrendBooks/${props.item.name}'> <button>
                    <img src={props.item.bookImg} alt="book-images" className="sm:w-34 sm:h-48 size-30 "/>

                   </button>
                    </Link> 
                </div>
            </div>
        </>
    );
}

export default TrendBooks;
