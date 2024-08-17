import React from 'react'
import './home1.css'
import { Link } from 'react-router-dom';
import Homebox from '../../assets/homebox.png'




function home1() {
 
  return (
    <div>
      <div className="flex flex-row my-[4rem] mx-[2rem] md:mx-[3rem] lg:ml-[2rem] lg:my-[-3rem] lg:mb-[-0.5rem] lg:py-[2rem]">
        <div className="flex flex-col w-[64rem] md:w-[90rem] lg:ml-[6rem] lg:w-[70rem] lg:mt-[4rem] justify-center">
          <p className="font-semibold font-sans-serif text-lg md:text-4xl md:my-[0.5rem] lg:text-3xl text-gray-600 tracking-wide lg:my-2 sm:bg-green-40 0 md:bg-yellow-4 00 lg:bg-blue-4 00">Trade-in offer</p>
          <p className="font-semibold font-sans-serif text-xl md:text-5xl lg:text-6xl text-gray-600 tracking-wide">Super value deals</p>
          <p className="font-semibold font-sans-serif text-xl md:text-5xl lg:text-6xl text-gray-600 tracking-wide">On all products</p>
          <p className="font-serif text-sm text-gray-600 my-1 md:text-xl md:mx-[0.5rem] md:my-[1rem] ">Save more with coupons & up to 70% off!</p>
          <Link to="/fshop" >
            <button className="bg-gradient-to-t from-red-600 to-pink-400 hover:bg-gradient-to-t hover:from-red-700 hover:to-pink-500 my-[0.5rem] px-[1rem] py-[1rem] text-sm rounded-full text-gray-200 font-sans-serif font-semibold md:py-[1.5rem] md:px-[2rem] md:text-xl">SHOP NOW</button>
          </Link> 
        </div>  
        <div>
          <img src={Homebox} alt="img" className="box  w-[40rem] h-[10rem] mx-[1rem] md:w-[45rem] md:h-[16rem] " />
        </div>
      </div>
      {/* <div className="flex flex-row my-[12rem] w-[25rem] ml-[1rem] sm:ml-[2rem] sm:my-[2rem] md:ml-[4rem] md:gap-8 lg:ml-[2rem] lg:my-[6rem] lg:mb-[-0.5rem] lg:py-[2rem]">
        <div className="flex flex-col sm:w-[70rem] md:w-[38rem] lg:ml-[6rem] lg:w-[70rem] lg:mt-[rem] justify-center mt-[-4rem]">
          <p className="font-semibold font-sans-serif text-lg sm:text-2xl md:text-3xl lg:text-3xl text-gray-600 tracking-wide lg:my-2">Trade-in offer</p>
          <p className="font-semibold font-sans-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-600 tracking-wide">Super value deals</p>
          <p className="font-semibold font-sans-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-600 tracking-wide">On all products</p>
          <p className="font-sans-serif text-sm lg:text-lg sm:text-sm md:text-sm text-gray-600 my-2 lg:my-6 sm:bg-green-400 md:bg-yellow-400 lg:bg-blue-400">Save more with coupons & up to 70% off!</p>
          <Link to="/shop">
            <button className="bg-gradient-to-t from-red-600 to-pink-400 px-4 py-2 text-sm sm:px-6 sm:py-4 rounded-full text-white font-sans-serif font-semibold">SHOP NOW</button>
          </Link>
        </div>
        <div className="sm:w-[250%] sm:ml-[-3rem] sm:mt-[-3rem] md:w-[50rem] md:mt-[-4rem]">
          <img src={Homebox} alt="img" className="mt-[-5rem] w-[19rem] ml-[-rem] lg:w-150rem] lg:mt-[2rem] lg:ml-[-2rem]" />
        </div>
      </div> */}
    </div>
  )
}

export default home1