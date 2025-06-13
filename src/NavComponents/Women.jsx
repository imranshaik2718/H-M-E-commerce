import React from 'react'
import vid1 from "../assets/hero/WS32F-16x9-women-startpage-wk24.mp4";
function Women() {
  return (
    <div>
      <Navbar/>
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
    
    </div>
  )
}

export default Women
