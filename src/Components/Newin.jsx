import React from 'react'
// import img1 from "../assets/Homecart/1.jpeg";
import img2 from "../assets/Homecart/2.jpeg";
import img3 from "../assets/Homecart/3.jpeg";
import img4 from "../assets/Homecart/4.jpeg";
import img5 from "../assets/Homecart/5.jpeg";
import img6 from "../assets/Homecart/6.jpeg";
function Newin() {
  return (
    <div className='min-h-screen mt-10'>
      <div className='flex'>
      <h1 className='mx-5 pb-2'>New in </h1>
      <h1 className='pb-2 '>View all</h1>
      </div>
      <div className="w-full  flex items-center justify-center bg-[#f9f9f9] py-10 px-4 ">
        <div className="flex justify-center items-center gap-1 overflow-hidden">
          <img src={img4} className="w-[300px] h-[480px] object-cover rounded-2xl " alt="image1" />
          <img src={img2} className="w-[300px] h-[480px] object-cover rounded-2xl  " alt="image1" />
          <img src={img3} className="w-[300px] h-[480px] object-cover rounded-2xl " alt="image1" />
          <img src={img6} className="w-[300px] h-[480px] object-cover rounded-2xl" alt="image1" />
          <img src={img5} className="w-[300px] h-[480px] object-cover rounded-2xl" alt="image1" />
        </div>
        </div>
    </div>
  )
}

export default Newin
