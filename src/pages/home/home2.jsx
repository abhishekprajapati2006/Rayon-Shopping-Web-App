import React from 'react'
import './home1.css'
import Shirt1 from '../../pages/products/product1/product.jsx'
import Banner3 from '../../assets/banner3.png'
import Adwatisment from '../../assets/adwatisment3.png'
import {Link} from 'react-router-dom'
function home2() {
  return (
    <div>
      <div className="my-[4rem]">
        <div className="my-[2rem]">
          <h1 className="text-3xl font-semibold text-gray-600 font-sans-serif text-center md:text-6xl">Featured Products</h1>
          <p className="my-[0.5rem] text-center font-semibold font-serif  text-gray-600 md:text-3xl">Summer Collection New Morden Design.</p>
        </div>
        <Shirt1/>
        <Shirt1/>
        <div className="my-[2rem]">
            <img src={Banner3} alt="img" className="w-full h-[14rem] md:h-[22rem]"/>
              <div className="flex flex-row mt-[-14rem] md:mt-[-22rem] ">
                <div className="">
                  <img src={Adwatisment} alt="" className="w-[14rem] h-[14rem] mx-[0.2rem] md:w-[20rem] md:h-[22rem] " />
                </div>
                <div className="md:my-[] ">
                  <p className="text-gray-300 font-bold text-2xl my-[2rem] mx-[1rem] mb-[-1.5rem] md:text-5xl md:my-[4rem] ">Repair Services</p>
                  <p className="text-gray-400 font-bold text-lg lg:text-3xl my-[2rem] mx-[1rem] md:text-2xl md:mt-[-3rem] md:my-[3rem] ">Up to 70% off- All T-shirts and accessories</p>
                  <Link to="/fshop" className="bg-gradient-to-t from-slate-600 to-gray-700 ml-[3.5rem] px-4 py-2 text-sm sm:py-4 rounded-lg text-white font-sans-serif font-semibold md:px-[3rem] md:py-[1.5rem] md:mx-[4rem] md:text-xl md:rounded-full ">SHOP NOW</Link>
                </div>
              </div> 
        </div>
        <div className="my-[2rem]">
          <h1 className="text-3xl lg:text-6xl font-semibold text-gray-600 font-sans-serif text-center md:text-6xl">Featured Products</h1>
          <p className="my-[0.5rem] text-center font-semibold font-serif lg:text-lg text-gray-600 lg:my-[1rem] md:text-3xl">Summer Collection New Morden Design.</p>
        </div>
        <Shirt1/>
        <Shirt1/>
      </div>
    </div>
  )
}

export default home2