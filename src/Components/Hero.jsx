import React from 'react'
import img1 from "../assets/hero/1.jpg";
import img2 from "../assets/hero/2.jpg";
import img3 from "../assets/hero/3.jpg";
function Hero() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center  px-4 mt-13">
  <div className="flex justify-center items-center gap-1 overflow-hidden">
    <img src={img1} className="w-[500px] h-[680px] object-cover  shadow-md" alt="image1" />
    <img src={img2} className="w-[500px] h-[680px] object-cover  shadow-md" alt="image2" />
    <img src={img3} className="w-[500px] h-[680px] object-cover  shadow-md" alt="image3" />
  </div>
</div>


  )
}

export default Hero
