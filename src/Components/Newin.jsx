import React from "react";
// import img1 from "../assets/Homecart/1.jpeg";
import img2 from "../assets/Homecart/2.jpeg";
import img3 from "../assets/Homecart/3.jpeg";
import img4 from "../assets/Homecart/4.jpeg";
import img5 from "../assets/Homecart/5.jpeg";
import img6 from "../assets/Homecart/6.jpeg";
import img7 from "../assets/Homecart/7.jpeg";
import img8 from "../assets/Homecart/8.jpeg";
import img9 from "../assets/Homecart/9.jpeg";
import img10 from "../assets/Homecart/10.jpeg";
import img11 from "../assets/Homecart/11.jpeg";
function Newin() {
  return (
    <div className="min-h-screen mt-10">
      <div className="flex justify-between items-center px-8">
        <h1 className="mx-5 pb-2">New in </h1>

        <h1 className="pb-2 mr-4 ">
          <a href="">
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 ml-5  text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </a>
        </h1>
      </div>
      <div className="w-full  flex items-center justify-center bg-[#f9f9f9]  z-30  px-4 ">
        <div className="flex justify-center items-center gap-1 overflow-hidden">
          <img
            src={img4}
            className="w-[300px] h-[480px] object-cover rounded-2xl  overflow-hidden"
            alt="image1"
          />
          <img
            src={img2}
            className="w-[300px] h-[480px] object-cover rounded-2xl   overflow-hidden"
            alt="image1"
          />
          <img
            src={img3}
            className="w-[300px] h-[480px] object-cover rounded-2xl  overflow-hidden"
            alt="image1"
          />
          <img
            src={img6}
            className="w-[300px] h-[480px] object-cover rounded-2xl  overflow-hidden"
            alt="image1"
          />
          <img
            src={img5}
            className="w-[300px] h-[480px] object-cover rounded-2xl  "
            alt="image1"
          />
        </div>

        
      </div>
      <div className="w-full  flex items-center justify-center -mt-13  bg-[#f9f9f9] px-4 ">
        <div className="flex justify-center items-center gap-1 overflow-hidden">
          <img
            src={img7}
            className="w-[300px] h-[480px] object-cover rounded-2xl  "
            alt="image1"
          />
          <img
            src={img8}
            className="w-[300px] h-[480px] object-cover rounded-2xl   "
            alt="image1"
          />
          <img
            src={img9}
            className="w-[300px] h-[480px] object-cover rounded-2xl  "
            alt="image1"
          />
          <img
            src={img10}
            className="w-[300px] h-[480px] object-cover rounded-2xl  "
            alt="image1"
          />
          <img
            src={img11}
            className="w-[300px] h-[480px] object-cover rounded-2xl  "
            alt="image1"
          />
        </div>

        
      </div>
    </div>
  );
}

export default Newin;
