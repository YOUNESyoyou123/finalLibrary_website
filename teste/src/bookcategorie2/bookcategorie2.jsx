import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import NavBare from '../Component/NavBare';
import { motion } from 'framer-motion';
import NavBareAdmin from '../AdminComponent/NavBareAdmin';

function Bookcategorie2() {
  const location = useLocation();
  const [images, setImages] = useState([]);
  const [cookies, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const toComponentB = (image) => {
    navigate('/componentB', { state: { image } });
  };

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(`https://finallibrary-website.onrender.com/Book/getImagebycategorie/${location.state.category}`);
        console.log(response.data);
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    getImages();
  }, [location.state.category]);

  return (
    <motion.div
      className="younes"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="flex overflow-hidden ">
        {localStorage.getItem('role') === 'admin' && <NavBareAdmin />}

        <div className="h-screen bg-[#EBEBEB] overflow-y-auto w-screen ">
          <NavBare />
          <div className="grid grid-cols-2 px-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-20 w-full max-w-6xl mx-auto">
            {images.map((image) => (
              <div key={image._id} className="bg-white rounded-lg overflow-hidden ease-in duration-200 hover:border-solid hover:ring-1 hover:ring-green-700 hover:-translate-y-2">
                <a onClick={() => (cookies.access_token ? toComponentB(image) : navigate('/Login'))}>
                  <img src={`https://finallibrary-website.onrender.com/${image.image}`} className="w-full h-64" alt="Book" />
                </a>
                <h4 className="text-black text-center">{image.Namebook}</h4>
                <h2 className="text-black text-center opacity-40">{image.Author}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Bookcategorie2;
