import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Newin from '../Components/Newin'


function Homepage() {
  return (
    <div className='bg-gray-200 nav font-[sans-serif]' >
     <Navbar/>
     <Hero/>
     <Newin/>
     </div>
   
  )
}

export default Homepage
