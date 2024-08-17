import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../assets/about/main.png'
import Img1 from '../assets/about/img1.png'
import Img2 from '../assets/about/img2.png'
import Img3 from '../assets/about/img3.png'
import Img4 from '../assets/about/img4.png'


function about(){
  return (
    <div>
      <div className="">
        <div className="">
          <img src={Main} alt="" className="h-[16rem] w-full md:h-[22rem] "/>
        </div>
        <div className="my-[2rem] ">
          <div  className="text-4xl font-semibold text-gray-600 font-serif text-center my-[0.2rem] md:my-[0.5rem] md:text-5xl ">About Our Brand</div>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <div className="text-center mx-[0.5rem] mx-[0.5rem] md:text-xl md:my-[1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maxime pariatur repellat rerum nam deleniti voluptates sunt laborum ex eos! Eum dolorem, nobis praesentium provident pariatur iusto, reprehenderit exercitationem officiis, magnam recusandae aut?
          </div>
        </div>
        <div className="my-[4rem]">
          <div className="flex flex-row border-1 bg-gray-300">
            <div className="">
              <img src={Img2} alt="" className="w-[28rem] h-[12rem] rounded-r-xl md:h-[20rem] " />
            </div>
            <div className="mx-[1rem] md:my-[1rem] ">
              <div className="text-gray-600 font-bold font-sans mt-[1rem] md:text-2xl ">Carefully Considered Details & Perfections </div>
              <div className="text-gray-400 font-serif text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, id?</div>
              <Link to="/fshop"><div className="text-gray-600 bg-yellow-500 text-sm rounded-full w-[7rem] px-[1.5rem] py-[0.5rem] mt-[1rem] md:w-[12rem] md:text-xl md:text-center md:py-[1rem] md:mx-[2rem] md:my-[2rem] ">Shop now</div></Link>
            </div>
          </div>
          <div className="flex flex-row border-1 bg-gray-200">
            <div className="mx-[1rem] md:my-[1rem]">
              <div className="text-gray-600 font-bold font-sans mt-[1rem] md:text-2xl ">Carefully Considered Details & Perfections </div>
              <div className="text-gray-400 font-serif text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, id?</div>
              <Link to="/fshop"><div className="text-gray-600 bg-yellow-500 text-sm rounded-full w-[7rem] px-[1.5rem] py-[0.5rem] mt-[1rem] md:w-[12rem] md:text-xl md:text-center md:py-[1rem] md:mx-[2rem] md:my-[2rem] ">Shop now</div></Link>
            </div>
            <div className="">
              <img src={Img4} alt="" className="w-[28rem] h-[12rem] rounded-l-xl md:h-[20rem]" />
            </div>
          </div>
          <div className="flex flex-row border-1 bg-gray-300">
            <div className="">
              <img src={Img1} alt="" className="w-[28rem] h-[12rem] rounded-r-xl md:h-[20rem]" />
            </div>
            <div className="mx-[1rem] md:my-[1rem]">
              <div className="text-gray-600 font-bold font-sans mt-[1rem] md:text-2xl ">Carefully Considered Details & Perfections </div>
              <div className="text-gray-400 font-serif text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, id?</div>
              <Link to="/fshop"><div className="text-gray-600 bg-yellow-500 text-sm rounded-full w-[7rem] px-[1.5rem] py-[0.5rem] mt-[1rem] md:w-[12rem] md:text-xl md:text-center md:py-[1rem] md:mx-[2rem] md:my-[2rem] ">Shop now</div></Link>
            </div>
          </div>
          <div className="flex flex-row border-1 bg-gray-200">
            <div className="mx-[1rem] md:my-[1rem]">
              <div className="text-gray-600 font-bold font-sans mt-[1rem] md:text-2xl ">Carefully Considered Details & Perfections </div>
              <div className="text-gray-400 font-serif text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, id?</div>
              <Link to="/fshop"><div className="text-gray-600 bg-yellow-500 text-sm rounded-full w-[7rem] px-[1.5rem] py-[0.5rem] mt-[1rem] md:w-[12rem] md:text-xl md:text-center md:py-[1rem] md:mx-[2rem] md:my-[2rem] ">Shop now</div></Link>
            </div>
            <div className="">
              <img src={Img3} alt="" className="w-[28rem] h-[12rem] rounded-l-xl md:h-[20rem]" />
            </div>
          </div>
        </div>
        <div className="my-[2rem] mx-[0.5rem] ">
          <div className="text-3xl font-bold font-serif text-gray-800 my-[0.5rem] mx-[1rem] md:text-6xl md:text-center">Join our newsletter</div>
          <div className="text-gray-600 font-serif text-sm mx-[1.3rem] my-[0.5rem] md:text-2xl md:text-center">Stay up-to-date with new collections and deals.</div>
        </div>
        <div className=" mx-[1.5rem] md:flex md:flex-row ">
          <div className="my-[0.5rem] md:my-[1rem] ">
            <input type="email" name="email" id="email" className=" rounded-lg pr-[6rem] pl-[1rem] py-[1rem] md:py-[1.5rem] md:pr-[16rem] md:pl-[1.5rem] md:text-2xl " placeholder="Your E-mail" />
          </div>
          <div className="my-[1rem] mx-[0.5] md:mx-[1rem]">
            <button class="bg-gradient-to-t from-red-600 to-pink-400 hover:bg-gradient-to-t hover:from-red-700 hover:to-pink-500 font-bold px-[9.2rem] py-3 rounded-lg text-center text-gray-300 md:text-2xl md:px-[2rem] md:py-[1.5rem] ">SEND</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about