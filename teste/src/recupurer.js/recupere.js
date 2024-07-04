import React  from "react";
import axios from axios ; 
function recuperer() {
    const handle = async (e) =>{
        e.preventDefault();
        const reponse = await axiosapp.get('https://finallibrary-website.onrender.com/Book/' , (req , res)=>{
        
           res.send('hello from simple server :)')
        
        })


    }

    return<> 


    <input type="texte"   onClick={handle} >Clic</input>

    </>
}
export default recuperer; 