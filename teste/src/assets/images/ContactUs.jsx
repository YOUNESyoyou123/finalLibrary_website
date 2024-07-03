import React from "react";
import ContactusLogo from "../assets/images/Animation - 1714559569746.json"
import Lottie from "lottie-react";
import EmailLogo from "../assets/images/emailLogo.svg"
import PhoneLogo from "../assets/images/Phone.svg";
import LocationLogo from "../assets/images/location.svg";
import Contactusimg from "../assets/images/ContactUs.jpg";

function ContactUs() {
  return (
    <div className="w-full flex justify-center items-center h-screen  overflow-hidden" >
      <div className="w-1/2">
        <img src={Contactusimg} alt="" className="w-full h-screen" />
      </div>
      <div className="mb-32 px-10 py-12 w-1/2 rounded-xl flex flex-col items-center xl:scale-125 ">
        <div className="py-2">
          <h1 className="text-center text-xl font-bold">Contact Us</h1>
          <Lottie animationData={ContactusLogo} className="w-64 h-32" />
          <p className="text-center py-1 font-semibold">
            Feel free to reach out to us
          </p>
        </div>
        <div className=" flex-col justify-center items-start ">
          <div className="md:px-10 flex gap-3 py-2 mt-2 bg-gray-400 bg-opacity-15 rounded-md items-center justify-start px-2">
            <img src={PhoneLogo} alt="phone-logo" width={25} />
            <div className="flex flex-col">
              <p>+213 542-158-917</p>
              <p>+213 552-594-725</p>
            </div>
          </div>
          <div className="flex   gap-3 py-2 mt-2 bg-gray-400 bg-opacity-15 rounded-md items-start justify-start px-2">
            <img src={EmailLogo} alt="email-logo" width={25} />
            <p>mokttarbenhatta@gmail.com</p>
          </div>
          <div className="flex gap-3  md:px-10 py-2 mt-2 bg-gray-400 bg-opacity-15 rounded-md items-start justify-start px-2">
            <img src={LocationLogo} alt="location-logo" width={25} />
            <p>Algeria, Setif, El Hidhab</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
