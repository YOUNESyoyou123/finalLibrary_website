import React, { createContext, useState  } from "react";
import Slider from "react-slick";
import computerScienceBooks from "./BooksData(test)/TrendsBookss";
import TrendBooks from "./TrendsBooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie'

//test fetch data(TestBackEnd)
export const BookContext = createContext();
function Slide() {



   // initilazing  Stet for  books
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









  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mt-4 px- ml-2">
      <Slider {...settings}>
        {images.map((image) => (
          <TrendBooks key={image._id} item={image} img={`http://localhost:3000/${image.image}`} />
        ))}
      </Slider>
    </div>
  );
}

export default Slide;
