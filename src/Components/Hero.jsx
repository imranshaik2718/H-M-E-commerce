import React from 'react'
import img1 from "../assets/hero/1.jpg";
import img2 from "../assets/hero/2.jpg";
import img3 from "../assets/hero/3.jpg";
import vid1 from "../assets/hero/nd.mp4.webm";

function Hero() {
  return (
    <>
    


<div className=" mx-auto mt-20 h-[70%] overflow-hidden">
  <video 
    className="w-full border-2 shadow-lg"
    autoPlay 
    muted 
    loop
  >
    <source src={vid1} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
<div className="w-full min-h-screen flex items-center justify-center">
  <div className="flex justify-center items-center  overflow-hidden w-full -mt-[50px]">
    <img src={img1} className="w-[700px] h-[680px] object-cover  shadow-md" alt="image1" />
    <img src={img2} className="w-[700px] h-[680px] object-cover  shadow-md" alt="image2" />
    <img src={img3} className="w-[700px] h-[680px] object-cover  shadow-md" alt="image3" />
  </div>
</div>
</>
  )
}

export default Hero
