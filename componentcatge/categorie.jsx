import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie'
import NavBare from '../Component/NavBare';
import { motion } from "framer-motion"

function Categorie() {
  const [file, setFile] = useState(null);
  const [namebk, setNamebk] = useState('');
  const [copy, setCopy] = useState('');
  const [author, setAuthor] = useState('');
  const [edition, setEdition] = useState('');
  const [images, setImages] = useState([]);
  const [cookies , setCookies ]=useCookies('access_token')

  const upload = async () => {
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
      console.log('Fichier uploadé avec succès');
      setFile(null); // Clear file input after successful upload
      setNamebk(''); // Clear form fields after successful upload
      setCopy('');
      setAuthor('');
      setEdition('');
      getImages(); // Refresh image list after upload
    } catch (error) {
      console.error('Erreur lors de l\'upload du fichier :', error);
    }
  };

  const navigate = useNavigate();
  



  const toComponentB = (image) => {
    navigate('/componentB', { state: { image } });
  }; // Pass entire image object

  const getImages = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Book/getImage');
      console.log(response.data);
      setImages(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des images :', error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    
    <motion.div
    className="younes"
    initial={{ opacity: 0,}}
    animate={{ opacity: 1}}
    transition={{
      duration: 1,
      delay: 0.3,}}>
    <div className='h-screen bg-[#EBEBEB] overflow-y-auto'> 
    
    <NavBare />
    
      <div className="grid grid-cols-5 gap-8 mt-20 w-full max-w-6xl mx-auto">
        
        {images.map((image) => (
          <div key={image._id} className='bg-white rounded-lg h-[312px] overflow-hidden w-[190px] ease-in duration-200 hover:border-solid hover:ring-1 hover:ring-green-700 hover:-translate-y-2'>
<a onClick={() => cookies.access_token ? toComponentB(image) : navigate('/Login')}>
              <img src={`http://localhost:3000/${image.image}`} className="w-full h-4/5" alt="Book" />
            </a>
            <h4 className='text-black text-center '>{image.Namebook}</h4>
            <h2 className='text-black text-center opacity-40'>{image.Author}</h2>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
}

export default Categorie;




/*
      <form onSubmit={upload} className="space-y-6">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <input type="text" placeholder="Nom du livre" value={namebk} onChange={(e) => setNamebk(e.target.value)} />
        <input type="text" placeholder="Numéro de copie" value={copy} onChange={(e) => setCopy(e.target.value)} />
        <input type="text" placeholder="Auteur" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input type="text" placeholder="Edition" value={edition} onChange={(e) => setEdition(e.target.value)} />
        <button type="submit">Soumettre</button>
      </form>*/ 







/*import React, { useState } from "react";
import NavBare from "../Component/NavBare";
import Image1 from "./image/1.png"
import Image2 from "./image/2.png"
import Image3 from "./image/3.png"
import Image4 from "./image/4.png"
import Image5 from "./image/5.png"
import Image6 from "./image/6.png"
import SFooter from "../Component/footer";
import axios from "axios";*/

/*/*    <NavBare/>

    <div className=" max-sm:grid-rows-6 max-sm:px-3  max-sm:h-[800px] max-sm:py-20  max-sm:grid-cols-2   min-[540px]:grid-cols-2 min-[540px]:grid-rows-3  min-[540px]:h-[520px] min-[540px]:pl-16  min-[540px]:py-10  main grid  lg:grid-cols-5  lg:grid-rows-2 lg:h-[600px] lg:pl-20 lg:pt-10  grid-cols-5  pl-20  grid-rows-2 h-[600px] bg-[#EBEBEB] pt-10 z-10  " >
    <div  className="max-sm:row-start-1 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-2   min-[540px]:col-start-2 min-[540px]:row-start-1  min-[540px]:h-[120px]                                                   lg:grid-rows-1 lg:h-[180px] lg:col-span-1 lg:col-start-2   lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-1    col-span-1 col-start-3 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl  " ><img src={Image2} alt="" className="w-[80px]   h-14   "  />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  ">Math</h5> </div>
    <div  className="max-sm:row-start-1 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-1   min-[540px]:col-start-1 min-[540px]:row-start-1  min-[540px]:h-[120px]                                                   lg:grid-rows-1 lg:h-[180px] lg:col-span-1 lg:col-start-3  lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-1   col-span-1 col-start-2 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl    "><img src={Image1} alt="" className="w-[80px]  h-14     " />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  " >Informatique</h5> </div>
    <div  className="max-sm:row-start-3 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-1   min-[540px]:col-start-1 min-[540px]:row-start-2  min-[540px]:h-[120px]                                                   lg:grid-rows-1 lg:h-[180px] lg:col-span-1 lg:col-start-4  lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-1   col-span-1 col-start-4 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl  " ><img src={Image4} alt="" className="w-[80px]   h-14   "  />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  ">Chimic</h5> </div>
    <div  className="max-sm:row-start-3 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-2   min-[540px]:col-start-2 min-[540px]:row-start-2  min-[540px]:h-[120px]                                                   lg:grid-rows-2 lg:h-[180px] lg:col-span-1 lg:col-start-2  lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-2   col-span-1 col-start-2 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl  " ><img src={Image3} alt="" className="w-[80px]   h-14   "  />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  ">Phisique</h5> </div>
    <div  className="max-sm:row-start-5 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-1   min-[540px]:col-start-1 min-[540px]:row-start-3  min-[540px]:h-[120px]                                                   lg:grid-rows-2 lg:h-[180px] lg:col-span-1 lg:col-start-3  lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-2   col-span-1 col-start-3 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl   " ><img src={Image5} alt="" className="w-[80px]   h-14   "  />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  ">Math&Info</h5> </div>
    <div  className="max-sm:row-start-5 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-2   min-[540px]:col-start-2 min-[540px]:row-start-3  min-[540px]:h-[120px]                                                   lg:grid-rows-2 lg:h-[180px] lg:col-span-1 lg:col-start-4  lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-2   col-span-1 col-start-4 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl   " ><img src={Image6} alt="" className="w-[80px]   h-14   "  />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  ">Phisique&chimique</h5> </div>
    </div>
    <SFooter/>*/
    /*7{setallimage.map(data =>{ 
            return <img src={"http://localhost:3000/"+{data.image} } ></img>
          } )}  */

          
/*    
    useEffect(()=>{
      axios.get('http://localhost:3000/Book/getImage' )
      .then(res => {
      console.log(res)
        setImage(res.data[11].image)
      
      })
      .catch(err => {
      
        console.error(err);
      });
},[])
*/
//<img src={"http://localhost:3000/" + url} />

/*    
    useEffect(()=>{
      axios.get('http://localhost:3000/Book/getImage' )
      .then(res => {
      console.log(res)
        setImage(res.data[11].image)
      
      })
      .catch(err => {
      
        console.error(err);
      });
},[])
*/

/*  const upload = () => {
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);
    axios.post('http://localhost:3000/Book/upload', formData)
      .then(res => {
        console.log("File uploaded successfully");   
      })
      .catch(err => {
        console.error("Error uploading file:", err);
      });
  };*/